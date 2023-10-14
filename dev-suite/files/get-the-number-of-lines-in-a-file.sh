Alternative to wc -l.

Example Function (bash 4):

lines() {
    # Usage: lines "file"
    mapfile -tn 0 lines < "$1"
    printf '%s\n' "${#lines[@]}"
}
Example Function (bash 3):

This method uses less memory than the mapfile method and works in bash 3 but it is slower for bigger files.

lines_loop() {
    # Usage: lines_loop "file"
    count=0
    while IFS= read -r _; do
        ((count++))
    done < "$1"
    printf '%s\n' "$count"
}
Example Usage:

$ lines ~/.bashrc
48

$ lines_loop ~/.bashrc
48
