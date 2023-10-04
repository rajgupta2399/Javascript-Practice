console.log('hello')
console.log('hello')
console.log('world')
console.log('world')
console.log('world')
console.log('world')

// STRING INDEXING

let userName = "Harshit Vashisth"

// H A R S H I T   V A S H I S T H
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 

console.log(userName[0]);
console.log(userName[1]);
console.log(userName[2]);
console.log(userName[3]);
console.log(userName[5]);
console.log(userName[6]);

// STRING LENGTH

console.log(userName.length);

let lastName = "Rohit SHARMA"

console.log(lastName.length);

// LAST INDEX FROM STRING 
// TO FIND LAST CHARACTER OF THE STIRNG 


console.log(userName[userName.length-1])

// TRIM METHOD 
// TO REMOVE SPACES FROM STRINGS AND THEN RETURN A NEW STRING WE WANT TO DECLARE A NEW VARIABLE AND STORE THE NEW STRING VALUE //

let company = "    Microsoft    "
console.log(company.length);

let newCompany = company.trim()
console.log(newCompany.length);

// TRIM METHOD TRIM THE SPACES 

// tOuPPERCASE() METHOD
// tOlOWERCASE() METHOD

console.log(company.toUpperCase());
console.log(newCompany.toLowerCase());


// SLICING METHOD
// IS USED TO SLICE THE STRING TO START FROM END

// TO START INDEX
// TO END INDEX 


let newName = newCompany.slice(0,5);
console.log(newName);


// TYPE OF 
// THERE 7 TYPES OF DATATYPES
 
let number = 7;
let nul = " ";
let string = "raj"
let symbol = "& $"
let boolean = true;
let bigInt =  9572525344372525;
let undefine;

console.log(typeof boolean);
console.log(typeof undefine);

// CONVERT STRING TO NUMBER

let a = "15"
let b = "10"

console.log(typeof a);

let c = +a

console.log(typeof c);

// CONVERT NUMBERS TO STIRNG

let d = 10
let e = 15
let f = d + ""

console.log(typeof f );

// STRING CONCATINATION

let firstName = "raj "
let middleName = "kumar"

let stringCon = firstName + middleName;
console.log(stringCon);

// STRING TEMPLATE 

console.log(`the first name is ${firstName} and lastname is ${middleName}`);





