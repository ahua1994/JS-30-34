// Assignment-JS-30:
// Write a simple JavaScript program to join all elements of
// the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red, Green, White, Black"

// let joinArray = (arr) => arr.join(" ");

function joinArray(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += arr[i] + " ";
    }
    return string.trim();
}

console.log(joinArray(["Red", "Green", "White", "Black"]));
