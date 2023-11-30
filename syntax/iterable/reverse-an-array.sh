Enabling extdebug allows access to the BASH_ARGV array which stores the current function’s arguments in reverse.

CAVEAT: Requires shopt -s compat44 in bash 5.0+.


Example Function:

reverse_array() {
    # Usage: reverse_array "array"
    shopt -s extdebug
    f()(printf '%s\n' "${BASH_ARGV[@]}"); f "$@"
    shopt -u extdebug
}


Example Usage:

$ reverse_array 1 2 3 4 5
5
4
3
2
1

$ arr=(red blue green)
$ reverse_array "${arr[@]}"
green
blue
red
