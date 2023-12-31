## Misunderstanding the constraints of the refactoring step

I have been in a number of workshops, mobbing or pairing sessions where someone has made a test pass and is in the refactoring stage. After some thought, they think it would be good to abstract away some code into a new struct; a budding pedant yells:

> You're not allowed to do this! You should write a test for this first, we're doing TDD!

This seems to be a common misunderstanding. **You can do whatever you like to the code when the tests are green**, the only thing you're not allowed to do is **add or change behaviour**.

The point of these tests are to give you the _freedom to refactor_, find the right abstractions and make the code easier to change and understand.

