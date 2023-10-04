console.log("hello world");

// ARRAY
// COLLECTION OF DIFFERENT DATA TYPES ELEMENTS
let name1 = ["raj",'sagar','manjulika'];
console.log(name1)
console.log(typeof name1)
console.log(Array.isArray(name1));



let obj = {};
console.log(typeof obj)
console.log(Array.isArray(obj));


// CHANGE VALUE IN ARRAY
let fruits = ['mango','apple','grapes'];
console.log(fruits)
fruits[2] = 'dragon fruit'
console.log(fruits)

// POP AND PUSH METHOD 
// POP METHOD -- used to pop element from the array from the last (delete)

let pen = ['cello' ,'trimax', 'pentek','fountain'];
console.log(pen)
myFav = pen.pop()
console.log(myFav);         //----- output ----- fountain


// PUSH METHOD -- used to push element from the array from the last (adding)

myFav = pen.push("gel pen");
console.log(pen) 


// SHIFT METHOD -- used to delete element from the first index of the array...


let pen1 = ['japan','usa','india']
myfav1 = pen1.shift()
console.log(myfav1);
console.log(pen1);

// UNSHIFT -- used to add element from the first index of the array...

myFav1 = pen1.unshift('ball pen');
console.log(pen1);