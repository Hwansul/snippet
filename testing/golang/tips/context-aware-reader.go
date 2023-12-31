type Reader interface {
    Read(p []byte) (n int, err error)
}

type Reader interface {
    Read(p []byte) (n int, err error)
}

func TestContextAwareReader(t *testing.T) {
    t.Run("lets just see how a normal reader works", func(t *testing.T) {
        rdr := strings.NewReader("123456")
        got := make([]byte, 3)
        _, err := rdr.Read(got)

        if err != nil {
            t.Fatal(err)
        }

        assertBufferHas(t, got, "123")

        _, err = rdr.Read(got)

        if err != nil {
            t.Fatal(err)
        }

        assertBufferHas(t, got, "456")
    })
}

func assertBufferHas(t testing.TB, buf []byte, want string) {
    t.Helper()
    got := string(buf)
    if got != want {
        t.Errorf("got %q, want %q", got, want)
    }
}

t.Run("behaves like a normal reader", func(t *testing.T) {
    rdr := NewCancellableReader(strings.NewReader("123456"))
    got := make([]byte, 3)
    _, err := rdr.Read(got)

    if err != nil {
        t.Fatal(err)
    }

    assertBufferHas(t, got, "123")

    _, err = rdr.Read(got)

    if err != nil {
        t.Fatal(err)
    }

    assertBufferHas(t, got, "456")
})

func NewCancellableReader(rdr io.Reader) io.Reader {
    return nil
}

func NewCancellableReader(rdr io.Reader) io.Reader {
    return rdr
}

t.Run("stops reading when cancelled", func(t *testing.T) {
    ctx, cancel := context.WithCancel(context.Background())
    rdr := NewCancellableReader(ctx, strings.NewReader("123456"))
    got := make([]byte, 3)
    _, err := rdr.Read(got)

    if err != nil {
        t.Fatal(err)
    }

    assertBufferHas(t, got, "123")

    cancel()

    n, err := rdr.Read(got)

    if err == nil {
        t.Error("expected an error after cancellation but didnt get one")
    }

    if n > 0 {
        t.Errorf("expected 0 bytes to be read after cancellation but %d were read", n)
    }
})

func NewCancellableReader(ctx context.Context, rdr io.Reader) io.Reader {
    return rdr
}

func NewCancellableReader(ctx context.Context, rdr io.Reader) io.Reader {
    return &readerCtx{
        ctx:      ctx,
        delegate: rdr,
    }
}

type readerCtx struct {
    ctx      context.Context
    delegate io.Reader
}

func (r *readerCtx) Read(p []byte) (n int, err error) {
    panic("implement me")
}

func (r readerCtx) Read(p []byte) (n int, err error) {
    return r.delegate.Read(p)
}

func (r readerCtx) Read(p []byte) (n int, err error) {
    if err := r.ctx.Err(); err != nil {
        return 0, err
    }
    return r.delegate.Read(p)
}
