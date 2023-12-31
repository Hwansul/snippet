/* How to write basic acceptance tests */
func main() {
    httpServer := &http.Server{Addr: ":8080", Handler: http.HandlerFunc(acceptancetests.SlowHandler)}

    server := gracefulshutdown.NewServer(httpServer)

    if err := server.ListenAndServe(); err != nil {
        // this will typically happen if our responses aren't written before the ctx deadline, not much can be done
        log.Fatalf("uh oh, didnt shutdown gracefully, some responses may have been lost %v", err)
    }

    // hopefully, you'll always see this instead
    log.Println("shutdown gracefully! all responses were sent")
}

/* Building and running the program */

package acceptancetests

import (
    "fmt"
    "math/rand"
    "net"
    "os"
    "os/exec"
    "path/filepath"
    "syscall"
    "time"
)

const (
    baseBinName = "temp-testbinary"
)

func LaunchTestProgram(port string) (cleanup func(), sendInterrupt func() error, err error) {
    binName, err := buildBinary()
    if err != nil {
        return nil, nil, err
    }

    sendInterrupt, kill, err := runServer(binName, port)

    cleanup = func() {
        if kill != nil {
            kill()
        }
        os.Remove(binName)
    }

    if err != nil {
        cleanup() // even though it's not listening correctly, the program could still be running
        return nil, nil, err
    }

    return cleanup, sendInterrupt, nil
}

func buildBinary() (string, error) {
    binName := randomString(10) + "-" + baseBinName

    build := exec.Command("go", "build", "-o", binName)

    if err := build.Run(); err != nil {
        return "", fmt.Errorf("cannot build tool %s: %s", binName, err)
    }
    return binName, nil
}

func runServer(binName string, port string) (sendInterrupt func() error, kill func(), err error) {
    dir, err := os.Getwd()
    if err != nil {
        return nil, nil, err
    }

    cmdPath := filepath.Join(dir, binName)

    cmd := exec.Command(cmdPath)

    if err := cmd.Start(); err != nil {
        return nil, nil, fmt.Errorf("cannot run temp converter: %s", err)
    }

    kill = func() {
        _ = cmd.Process.Kill()
    }

    sendInterrupt = func() error {
        return cmd.Process.Signal(syscall.SIGTERM)
    }

    err = waitForServerListening(port)

    return
}

func waitForServerListening(port string) error {
    for i := 0; i < 30; i++ {
        conn, _ := net.Dial("tcp", net.JoinHostPort("localhost", port))
        if conn != nil {
            conn.Close()
            return nil
        }
        time.Sleep(100 * time.Millisecond)
    }
    return fmt.Errorf("nothing seems to be listening on localhost:%s", port)
}

func randomString(n int) string {
    var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

    s := make([]rune, n)
    for i := range s {
        s[i] = letters[rand.Intn(len(letters))]
    }
    return string(s)
}

/* The acceptance test(s)  */

package main

import (
    "testing"
    "time"

    "github.com/quii/go-graceful-shutdown/acceptancetests"
    "github.com/quii/go-graceful-shutdown/assert"
)

const (
    port = "8080"
    url  = "<http://localhost:" > +port
)

func TestGracefulShutdown(t *testing.T) {
    cleanup, sendInterrupt, err := acceptancetests.LaunchTestProgram(port)
    if err != nil {
        t.Fatal(err)
    }
    t.Cleanup(cleanup)

    // just check the server works before we shut things down
    assert.CanGet(t, url)

    // fire off a request, and before it has a chance to respond send SIGTERM.
    time.AfterFunc(50*time.Millisecond, func() {
        assert.NoError(t, sendInterrupt())
    })
    // Without graceful shutdown, this would fail
    assert.CanGet(t, url)

    // after interrupt, the server should be shutdown, and no more requests will work
    assert.CantGet(t, url)
}

/* `assert.CanGet/CantGet` are helper functions I made to DRY up this common assertion for this suite. */

func CanGet(t testing.TB, url string) {
    errChan := make(chan error)

    go func() {
        res, err := http.Get(url)
        if err != nil {
            errChan <- err
            return
        }
        res.Body.Close()
        errChan <- nil
    }()

    select {
    case err := <-errChan:
        NoError(t, err)
    case <-time.After(3 * time.Second):
        t.Errorf("timed out waiting for request to %q", url)
    }
}
