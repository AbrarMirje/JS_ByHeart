const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes.length);
// console.log(marvel_heroes[3][1]);

// Seperately add two arrays in a single new array
// const avengers = marvel_heroes.concat(dc_heroes)
// console.log(avengers);


// Achieving above functionality using spread operator
const allNewAvengers = [...marvel_heroes, ...dc_heroes]
// console.log(allNewAvengers);


// flat converts all the nested array into a given depth of an array
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);




console.log(Array.isArray("Abrar"));

// Creates an array from an iterable object.
console.log(Array.from("Abrar"));

// Interesting as per the interview perspective
console.log(Array.from({ name: "Abrar" }));


let score1 = 100
let score2 = 200
let score3 = 300

// This will convert all the variables into an array
console.log(Array.of(score1, score2, score3));
