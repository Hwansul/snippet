const arr = [3, 1, 5, 7, 9];  // Want to remove 5 (index: 2)

arr[2] = arr[arr.length -1];  // Copy last element to 3rd place
arr.pop();                    // Remove the last element
