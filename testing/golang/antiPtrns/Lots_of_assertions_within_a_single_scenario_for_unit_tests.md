## Lots of assertions within a single scenario for unit tests

Many assertions can make tests difficult to read and challenging to debug when they fail.

They often creep in gradually, especially if test setup is complicated because you're reluctant to replicate the same horrible setup to assert on something else. Instead of this you should fix the problems in your design which are making it difficult to assert on new things.

A helpful rule of thumb is to aim to make one assertion per test. In Go, take advantage of subtests to clearly delineate between assertions on the occasions where you need to. This is also a handy technique to separate assertions on behaviour vs implementation detail.

For other tests where setup or execution time may be a constraint (e.g an acceptance test driving a web browser), you need to weigh up the pros and cons of slightly trickier to debug tests against test execution time.

