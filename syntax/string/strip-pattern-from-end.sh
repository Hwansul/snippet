Example Function:

rstrip() {
    # Usage: rstrip "string" "pattern"
    printf '%s\n' "${1%%$2}"
}


Example Usage:

$ rstrip "The Quick Brown Fox" " Fox"
The Quick Brown
