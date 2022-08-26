// Assignment-JS-31:
// Write a JavaScript program that accepts a number as input and insert
// dashes (-) between each two even numbers.
// For example, if you accept 025468 the output should be 0-254-6-8.

function insert(num) {
    let number = String(num);
    let answer = "";
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
            answer += number[i] + "-";
        } else {
            answer += number[i];
        }
    }
    return answer;
}

console.log(insert("022225468"));
