##  Where's the chapter on testing databases?

This has been a common request that I have put off for over five years. The reason is this chapter will always be my answer.

<u>Don't mock the database driver and spy on calls</u>. These tests are difficult to write and potentially bring very little value. You shouldn't assert whether a particular `SQL` statement was sent to the database, that is, implementation detail; **your tests should only care about behaviour**. Proving a specific SQL statement was compiled _does not_ prove your code _behaves_ how you need it to.

**Contracts** force you to decouple your tests from implementation details and focus on behaviour.

Follow the TDD approach described above to drive out your persistence needs.

[The example repository](https://github.com/quii/go-fakes-and-contracts) has some examples of contracts, and how they're used to test in-memory and SQLite implementations of some persistence needs.

```go
package inmemory_test

import (
	"github.com/quii/go-fakes-and-contracts/adapters/driven/persistence/inmemory"
	"github.com/quii/go-fakes-and-contracts/domain/planner"
	"testing"
)

func TestInMemoryPantry(t *testing.T) {
	planner.PantryContract{
		NewPantry: func() planner.Pantry {
			return inmemory.NewPantry()
		},
	}.Test(t)
}
```

```go
package sqlite_test

import (
	"github.com/quii/go-fakes-and-contracts/adapters/driven/persistence/sqlite"
	"github.com/quii/go-fakes-and-contracts/domain/planner"
	"testing"
)

func TestSQLitePantry(t *testing.T) {
	client := sqlite.NewSQLiteClient()
	t.Cleanup(func() {
		if err := client.Close(); err != nil {
			t.Error(err)
		}
	})

	planner.PantryContract{
		NewPantry: func() planner.Pantry {
			return sqlite.NewPantry(client)
		},
	}.Test(t)
}
```

Whilst Docker et al. _do_ make running databases locally easier, they can still carry a significant performance overhead. Fakes with contracts allow you to use restrict the need to use the "heavier" dependency to only when you're validating the contract, and not needed for other kinds of tests.

Using in-memory fakes for acceptance and integration tests for *the rest* of the system provides a much faster and simpler developer experience.

