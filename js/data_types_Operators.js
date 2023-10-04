"use strict";


console.log('hello world')
// console.log('hello world')

 // DATA TYPES
 // UNDEFINED DATA TYPE

let firstName;
console.log(firstName);
console.log(typeof firstName)

// NULL DATATYPE
// WHENN YOU SEE THE DATA TYPE OF NULL IT WILL BE SHOW AS OBJECT BECAUSE IT IS THE BIGGEST ERROR IN JS

// BUT WE CAN TREAT AS NULL DATA TYPE

let vari = null;
console.log('vari')
console.log(typeof null);

// BigInt DATA TYPE
// IS USED TO STORE BIGINTEGER VALUE AND IT WILL BE WORKED ON ONLY WITH HIS DATA TYPE

console.log(Number .MAX_SAFE_INTEGER);
// output - 9007199254740991

var num1 = BigInt(1234);
var num2 = 4567n;
console.log(num1 + num2);

// NO ERROR 

// BOOLEAN AND COMPARISON OPERAOTR 
// BOOLEAN - TRUE OR FALSE VALUE RETURN DURING CONDITION CHECK

console.log(num1>num2) // output will be false //
console.log(num1<=num2); // output will be true 

// COMPARISON OPERATOR 

let number1 = '7'
let number2 = 7
console.log(number1==number2); // it will be true

// == OPERATOR SEE ONLY THE VALUE IS EQUAL OR NOT THEY NOT CHECK THE DATA TYPE 

console.log(number1===number2); // it will be false
// === OPERATOR CHECK THE VALUE AND DATA TYPE ALSO









