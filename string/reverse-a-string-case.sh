CAVEAT: Requires bash 4+

Example Function:

reverse_case() {
    # Usage: reverse_case "string"
    printf '%s\n' "${1~~}"
}
Example Usage:

$ reverse_case "hello"
HELLO

$ reverse_case "HeLlO"
hElLo

$ reverse_case "HELLO"
hello
