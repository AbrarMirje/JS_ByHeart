// reduce 
const numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)
// console.log(sum);

const total = numbers.reduce((acc, crval) => acc + crval, 0)
console.log(total);