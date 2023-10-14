Example Function:

strip() {
    # Usage: strip "string" "pattern"
    printf '%s\n' "${1/$2}"
}


Example Usage:

$ strip "The Quick Brown Fox" "[aeiou]"
Th Quick Brown Fox

$ strip "The Quick Brown Fox" "[[:space:]]"
TheQuick Brown Fox
