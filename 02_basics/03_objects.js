// singleton
// Object.create

// Object literals
const mySym = Symbol("mySym1")

const jsUser = {
    name: "Abrar",
    "full name": "Abrar Mirje",
    age: 23,
    [mySym]: "mySym1",
    location: "Shiroli",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(jsUser.email); // Not recommanded
// console.log(jsUser["email"]); // Recommanded

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);

// To change the value of object
jsUser.name = "JavaScript";
// console.log(jsUser);
// freez will freeze the object so that user could not make the changes in the object 
// Object.freeze(jsUser);
jsUser.name = "Python";
// console.log(jsUser);

// Additng function inside the object
jsUser.greeting = function () {
    console.log("Hello JS users!!");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());