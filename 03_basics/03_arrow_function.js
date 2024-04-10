const user = {
    username: "Abrar",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // this is used to current context
    }
}
// user.welcomeMessage();
// user.username = "David";
// user.welcomeMessage();

// console.log(this);


function chai() {
    console.log(this);
}
// chai()


// Arrow Function
const chai2 = () => {
    console.log(this);
}
// chai()


const addTwo = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}
console.log(addTwo(5, 6));

// Implicit return arrow function
const addThree = (firstNumber, secondNumber, thirdNumber) => firstNumber + secondNumber + thirdNumber;
// console.log(addThree(10, 20, 30));

// Take precaustion while returning the object using arrow function
const userName = () => ({ "name": "Abrar" });
console.log(userName());









