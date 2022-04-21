let rearrange = (arr, n) => {
    for (let i = 0; i < n - 1; i++) {
        if (i % 2 == 0 && arr[i] > arr[i + 1]) {
            // swap(arr[i], arr[i + 1]);
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
        if (i % 2 != 0 && arr[i] < arr[i + 1]) {
            // swap(arr[i], arr[i + 1]);
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}
// function to print array
let printArray = (arr, size) => {
    ans = '';
    for (let i = 0; i < size; i++) {
        ans += arr[i] + " ";
    }
    console.log(ans);
}
// Driver Code
let arr = [5, 3, 9, 1, 44, 6];
let n = arr.length;
// document.write("Before rearranging: ");
console.log("Before rearranging: ");

printArray(arr, n);
rearrange(arr, n);
console.log("After rearranging: ");
printArray(arr, n);

//3 9 1 44 5 6