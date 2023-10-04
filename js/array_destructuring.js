// array destructuring


const fruits = ['mango','apple','grapes','guava','banana'];

let [array1,array2] = fruits;
console.log("value of array1",array1);
console.log("value of array2",array2);

let [array3,array4,...remainElement] = fruits;
console.log('value of array3' , array3)
console.log('value of array4' , array4)
console.log(remainElement);


let remainElement1 = fruits.slice(1);
console.log(remainElement1);


// we can destructure the array and assign its value to new variable like let and const variables and remaining part of the array will make the new array of by using spread operator

