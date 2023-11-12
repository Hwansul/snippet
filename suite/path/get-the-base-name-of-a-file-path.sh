Alternative to the basename command.

Example Function:

basename() {
    # Usage: basename "path" ["suffix"]
    local tmp

    tmp=${1%"${1##*[!/]}"}
    tmp=${tmp##*/}
    tmp=${tmp%"${2/"$tmp"}"}

    printf '%s\n' "${tmp:-/}"
}


Example Usage:

$ basename ~/Pictures/Wallpapers/1.jpg
1.jpg

$ basename ~/Pictures/Wallpapers/1.jpg .jpg
1

$ basename ~/Pictures/Downloads/
Downloads
