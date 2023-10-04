// More useful things
// ● Iterables
// jiske andar hum for of loop lga sake ya jiski length or index ko access kar sake 

// those objects we can run for of loop and find length or find thier index called iterables

// EXAMPLE ; string or arrays
const name1 = 'rakesh'
for(let key of name1){
    console.log(key)
}

// objects are not iterables because we cannot run the loop inside array like object

const person = {key1:"value1",key2:"value2"}
// for(let key of person){
//     console.log(key)
// }

// ERROR ---  TypeError: person is not iterable


const sets = new Set([1,2,3])
const array1 = ['item1','item2']
const array2 = ['item1','item2']

sets.add(array1)
sets.add(array2)
console.log(sets)

for(let set of sets){
    console.log(set)
}



length = 0
for(set of sets){
    length++
}

console.log(length)


if(sets.has(2)){
    console.log("p")
}
else{
    console.log("a")
}


// REMOVE DUPILICATE FROM THE AARAY AND RETURN ORIGINAL ARRAY WITH UNIQUE NUMBERS
const dup = [1,2,3,4,5,6,1,3,4,7,4,2,3,5,6]
const remove = new Set(dup)
console.log(remove)

console.log(Array.from(remove))


// MAPS
// Map is a iterable 
// store data in ordered fashion 
// store key value pair like object 
// duplicate keys are not allowed 

// DIFFERENT BETWEEN MAP AND OBJECT 
// OBJECT 
// object only have string or symbol as key

// MAPS
// but in maps we can use anything as key
// like --- arrat,number,string or any data-type used as key 

///////////////////////// object

// object ----------------- object literals
const person1 = {
    firstName : "raj",
    lastName : "kumar",
    1 : "one"
}

// how to get the value of object 
console.log(person1.firstName)
console.log(person1["lastName"])

// js take the number key as string 

// Maps
const map = new Map([["age",18]])
// adding key value pairs by set method 

map.set("firstName",'sagar')
map.set(19,"age")
console.log(map)  // Map(3) {'age' => 18, 'firstName' => 'sagar', 19 => 'age'}


// get the key and value of maps using GET method
console.log(map.get(19))

// printing all the keys
console.log(map.keys()) // they print all the keys

// printing all the values
console.log(map.values()) // they print all the values


console.log("loop in keys")
for(let key of map.keys()){
    console.log(key)
}


console.log("loop in values")
for(let key of map.values()){
    console.log(key)
}

console.log("iterate the map by usng for loop")
for(const key of map){
    console.log(key)
}

// ['age', 18]
// ['firstName', 'sagar']
// [19, 'age']

// but they will print the key value pairs in array form
// and if we want to prin the key value pair of map we have to destructure the array 

for(let [key,value] of map){
    console.log(`key is ${key} and the value is ${value}`)
}
// OUTPUT
// key is age and the value is 18
// obj_methods.js:133 key is firstName and the value is sagar
// obj_methods.js:133 key is 19 and the value is age


// ------------------------------------ object as a key inside map ------------

const student1 = {
    studentId : 2499,
    firstName : "sagar"
}

const student2 = {
    studentId : 2399,
    firstName : "raj"
}

const maps = new Map()
maps.set(student1,student2)
console.log(maps)
console.log(maps.get(student1).studentId)
console.log(maps.get(student1).firstName)

for(let [key,value] of maps){
    console.log(`${key.studentId} : ${value.studentId}`)

    console.log(`${key.firstName} : ${value.firstName}`)
}

for(let key of maps.keys()){
    console.log(key)
}


for(let key of maps.values()){
    console.log(key)
}


// object assign
// object assign same working as spread operator and this is old method in js
console.log('onject assign method')

const target = { a: 1, b: 4 };
const source = { b: 2, c: 5 };


// using spread operator 
const new2 = {...target,...source}
console.log(new2)


// using object assign method same working as spread operator

const new1 = Object.assign(source,target)
console.log(new1)
console.log(new1 === source)

// optional chaining 
// mainly this is used in React js 
// when object key and the value also inside the object to check it's available or not 

const obj = {
    firstName : 'sagar',
    address : {
        // housNumber : "D-51, Bawana"
    }
}

console.log(obj?.firstName) // if name available they print the name otherwise they print undefined wihtout giving any error

console.log(obj?.address?.housNumber) // there is a case where address key available but value not available they print the undefined