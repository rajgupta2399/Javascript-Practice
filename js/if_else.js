// IF ELSE CONDITION
let num = 14

if(num%2 ===0){
    console.log('even')
}
else{
    console.log('odd')
}

// FALSY VALUES --- THESE ALLS ARE FALSY VALUES IN CONDTIONCAL STATEMENT WE CAN RUN THIS VALUES THEY WWILL ONLY EXECUTE ONLY else PART

// false
// ""
// null
// undefined
// 0

let firstName = ""
if(firstName){
    console.log("hello name..!!")
}
else{
    console.log("hello no nname");
}

let firstName1 = null
if(firstName1){
    console.log("hello name..!!")
}
else{
    console.log("hello no nname");
}


let firstName2;
if(firstName2){
    console.log("hello name..!!")
}
else{
    console.log("hello no nname");
}

let firstName3 = 0;
if(firstName3){
    console.log("hello name..!!")
}
else{
    console.log("hello no nname");
}

// THEY ALL GIVE ONLY FALSY VALUE U CAN SAY THEY ALL GIVE ONLY ELSE PART STATEMENT //


// TRUTHY VALUES 
// 'abc'
// '123'
// true


console.log('hello')


// TERNARY OPERATOR

let age = parseInt(prompt('enter your age will be able to drive the car :'));

let drive = age>=18 ? "your are able to driving" : "you are not able to drive the car";

console.log(drive);

