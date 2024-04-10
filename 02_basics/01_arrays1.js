const myArr = [0, 1, 2, 3, 4, 5, 6]
const languages = ["Java", "Python", "Js"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods
// myArr.push(7)
// myArr.pop()
// myArr.unshift(33) // add value at the starting of the array
// myArr.shift() // remove value at the starting of the array

// console.log(myArr.includes(66));
// console.log(myArr.indexOf(1)); // Not present then -1

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); // type = string


// Slice, Splice
console.log("A ", myArr);
const myNewArr = myArr.slice(1, 3)
console.log(myNewArr);
console.log("B ", myArr);

// Splice changes the original array
const myNewArr1 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myNewArr1);

