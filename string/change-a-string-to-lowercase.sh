CAVEAT: Requires bash 4+

Example Function:

lower() {
    # Usage: lower "string"
    printf '%s\n' "${1,,}"
}


Example Usage:

$ lower "HELLO"
hello

$ lower "HeLlO"
hello

$ lower "hello"
hello
