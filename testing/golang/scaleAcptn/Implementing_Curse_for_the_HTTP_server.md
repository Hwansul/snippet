## Implementing `Curse` for the HTTP server

Again, an exercise for you, the reader. We have our domain-level specification and our domain-level logic neatly separated. If you've followed this chapter, this should be very straightforward.

- Add the specification to the existing acceptance test for the HTTP server
- Update your `Driver`
- Add the new endpoint to the server, and reuse the domain code to implement the functionality. You may wish to use `http.NewServeMux` to handle the routeing to the separate endpoints.

Remember to work in small steps, commit and run your tests frequently. If you get really stuck [you can find my implementation on GitHub](https://github.com/quii/go-specs-greet).

