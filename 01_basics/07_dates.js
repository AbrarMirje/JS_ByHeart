let myDates = new Date()
// console.log(myDates);

// console.log(myDates.toString());
// console.log(myDates.toISOString());
// console.log(myDates.toDateString());
// console.log(myDates.toTimeString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toJSON());

// To create own date
// Note: month start from 0
// let myCreatedDate = new Date(2024, 0, 4);

// // Below month starts form 01
let anotherMyCreatedDate = new Date("2024-01-4"); // YYYY-MM-DD
// console.log(myCreatedDate.toDateString());
// console.log(anotherMyCreatedDate.toDateString());

let timeStamp = Date.now()
// Below values are in miliseconds
console.log(timeStamp);
console.log(anotherMyCreatedDate.getTime());

// If we want values in seconds
console.log(Math.floor(Date.now() / 1000));