## Try to run the test

```
./greeter_server_test.go:46:12: undefined: go_specs_greet.Driver
```

We're still practising TDD here! It's a big first step we have to make; we need to make a few files and write maybe more code than we're typically used to, but when you're first starting, this is often the case. It's so important we try to remember the red step's rules.

> Commit as many sins as necessary to get the test passing

## Try to run the test

```
./greeter_server_test.go:48:39: cannot use driver (variable of type go_specs_greet.Driver) as type specifications.Greeter in argument to specifications.GreetSpecification:
	go_specs_greet.Driver does not implement specifications.Greeter (wrong type for Greet method)
		have Greet() (string, error)
		want Greet(name string) (string, error)
```

The change in the specification has meant our driver needs to be updated.

## Try to run the test

```
./greeter_server_test.go:26:12: undefined: grpcserver
```

We haven't created a `Driver` yet, so it won't compile.

## Try to run the test

```
# github.com/quii/go-specs-greet/cmd/grpcserver_test [github.com/quii/go-specs-greet/cmd/grpcserver.test]
./greeter_server_test.go:27:39: cannot use &driver (value of type *grpcserver.Driver) as type specifications.MeanGreeter in argument to specifications.CurseSpecification:
	*grpcserver.Driver does not implement specifications.MeanGreeter (missing Curse method)
```

Our `Driver` doesn't support `Curse` yet.

