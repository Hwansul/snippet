## Useless assertions

Ever worked on a system, and you've broken a test, then you see this?

> `false was not equal to true`

I know that false is not equal to true. This is not a helpful message; it doesn't tell me what I've broken. This is a symptom of not following the TDD process and not reading the failure error message.

Going back to the drawing board,

> Write a test, see it fail (and don't be ashamed of the error message)

