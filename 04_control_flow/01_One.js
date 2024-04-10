// falsy values:
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values:
// "0", 'false', " ", [], {}, function(){}

// To check array is empty or not
const userEmail = []
if (userEmail.length === 0) {
    console.log("Empty array");
}

// To check Object is empty or not
if (Object.keys(userEmail).length == 0) {
    console.log('This object is Empty');
}

// Nullish Coalescing Operator (??): null defined
let val1;
// val1 = 5 ?? 10

// If value is null then it will assign the values which is defined after the ?? operator
// val1 = null ?? 50

val1 = null ?? 10 ?? 99

console.log(val1);