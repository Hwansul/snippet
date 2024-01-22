CAVEAT: Requires bash 4+

Example Function:

upper() {
    # Usage: upper "string"
    printf '%s\n' "${1^^}"
}

Example Usage:

$ upper "hello"
HELLO

$ upper "HeLlO"
HELLO

$ upper "HELLO"
HELLO
