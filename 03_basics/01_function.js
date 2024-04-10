function myName() {
    console.log("A");
    console.log("B");
    console.log("R");
    console.log("A");
    console.log("R");
}

// myName();

function addTwoNumber(firstNumber, secondNumber) {
    // console.log(firstNumber + secondNumber);
    return firstNumber + secondNumber
}

const result = addTwoNumber(10, 50)
console.log(result); // undefined (if you don't return)

