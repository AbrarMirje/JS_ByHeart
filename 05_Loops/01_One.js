// // for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!!"
// for (const greet of greetings) {
//     console.log(greet);
// }


// Maps
// It is an object stored data in key:value pair, it preserves the insertion order and it does not allow to insert duplicate value
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// Array destructuring
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}