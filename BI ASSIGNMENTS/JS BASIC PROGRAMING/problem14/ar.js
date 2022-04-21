//d=3,n=7
let d = prompt("Please enter d:"); //3
let n = prompt("Please enter n:");//7

    /* Function to left rotate arr of size n by d */
    function leftRotate(arr , d , n) {
        for (i = 0; i < d; i++)
            leftRotatebyOne(arr, n);
    }
 
    function leftRotatebyOne(arr , n) {
        let i, temp;
        temp = arr[0];
        for (i = 0; i < n - 1; i++)
            arr[i] = arr[i + 1];
        arr[n - 1] = temp;
    }
 
    /* utility function to print an array */
    function printArray(arr , n) {
        for (i = 0; i < n; i++)
            document.write(arr[i] + " ");
    }

        let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
        leftRotate(arr, d, n);
        printArray(arr, n);