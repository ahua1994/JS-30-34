// Assignment-JS-32:
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function arrSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(arrSort([3, 8, 7, 6, 5, -4, -3, 2, 1]));
