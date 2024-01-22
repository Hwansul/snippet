Example Function:

lstrip() {
    # Usage: lstrip "string" "pattern"
    printf '%s\n' "${1##$2}"
}


Example Usage:

$ lstrip "The Quick Brown Fox" "The "
Quick Brown Fox
