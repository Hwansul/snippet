Example Function:

trim_quotes() {
    # Usage: trim_quotes "string"
    : "${1//\'}"
    printf '%s\n' "${_//\"}"
}


Example Usage:

$ var="'Hello', \"World\""
$ trim_quotes "$var"
Hello, World
