// Assignment-JS-34:
// Write a JavaScript program that accepts a string as input
// and swap the case of each character. For example, if you
// input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swap(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        str[i] == str[i].toLowerCase()
            ? (answer += str[i].toUpperCase())
            : (answer += str[i].toLowerCase());
    }
    return answer;
}

console.log(swap("The Quick Brown Fox"));
