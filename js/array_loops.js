// FOR LOOPS
// in loops we need the lenght of the array

// for(let i =0; i<=10; i++){
//     console.log(i)
// }

// ARRAYS IN LOOPS
let name2 = []
let name1 = ["raj",'sagar','manjulika','akshat'];
for(let i=0; i<name1.length; i++){
    console.log(name1[i]);
    name2.push(name1[i]);
}

console.log(name2)

// ARRAY WHILE LOOP 

const fruits = ['mango','apple','guava','pine-apple','grapes']
let j = 0;
while(j<fruits.length){
    console.log(fruits[j])
    j++
}

// ARRAY FOR OF LOOP
for(let k of fruits){
    console.log(k.toUpperCase())
}

// ARRAY FOR IN LOOP
for(let p in fruits){
    console.log(fruits[p]);
}

