Each time the printf is called, the next array element is printed. When the print hits the last array element it starts from the first element again.

arr=(a b c d)

cycle() {
    printf '%s ' "${arr[${i:=0}]}"
    ((i=i>=${#arr[@]}-1?0:++i))
}
