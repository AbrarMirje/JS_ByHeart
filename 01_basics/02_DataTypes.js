"use strict"; // treat all js code as newer version of js

// alert(3 + 3) // This will not run in node, this is run on browser


// data_types
/**
 * number --> 
 * bigint
 * string => ""
 * boolean => true / false
 * null => standalone value
 * undefined => 
 * symbol => uniqueness
 * object
 */

console.log(typeof undefined);
console.log(typeof null);


// Primitive Data Types:
/*
    7 types:
        1) String
        2) Number
        3) Boolean
        4) null
        5) undefined
        6) symbol
        7) BigInt
*/

// Reference Type / Non Primitive Data Types
/*
    Arrays, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = BigInt(123456789123456789123)
const bigNumber = 123456789123456789123n
console.log(bigNumber);
















