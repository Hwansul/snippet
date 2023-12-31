type Payload struct {
    Message string `xml:"message"`
}

func GetData() string {
    cmd := exec.Command("cat", "msg.xml")

    out, _ := cmd.StdoutPipe()
    var payload Payload
    decoder := xml.NewDecoder(out)

    // these 3 can return errors but I'm ignoring for brevity
    cmd.Start()
    decoder.Decode(&payload)
    cmd.Wait()

    return strings.ToUpper(payload.Message)
}

func TestGetData(t *testing.T) {
    got := GetData()
    want := "HAPPY NEW YEAR!"

    if got != want {
        t.Errorf("got %q, want %q", got, want)
    }
}

type Payload struct {
    Message string `xml:"message"`
}

func GetData(data io.Reader) string {
    var payload Payload
    xml.NewDecoder(data).Decode(&payload)
    return strings.ToUpper(payload.Message)
}

func getXMLFromCommand() io.Reader {
    cmd := exec.Command("cat", "msg.xml")
    out, _ := cmd.StdoutPipe()

    cmd.Start()
    data, _ := io.ReadAll(out)
    cmd.Wait()

    return bytes.NewReader(data)
}

func TestGetDataIntegration(t *testing.T) {
    got := GetData(getXMLFromCommand())
    want := "HAPPY NEW YEAR!"

    if got != want {
        t.Errorf("got %q, want %q", got, want)
    }
}

func TestGetData(t *testing.T) {
    input := strings.NewReader(`
<payload>
    <message>Cats are the best animal</message>
</payload>`)

    got := GetData(input)
    want := "CATS ARE THE BEST ANIMAL"

    if got != want {
        t.Errorf("got %q, want %q", got, want)
    }
}
