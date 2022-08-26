// Assignment-JS-33:
// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function count(arr) {
    let most;
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                counter++;
            }
        }
        if (counter > highest) {
            most = arr[i];
            highest = counter;
        }
    }
    return `${most}, ${highest} times`;
}

console.log(count([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
