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
