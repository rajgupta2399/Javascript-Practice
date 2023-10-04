// PRIMITIVE DATA TYPE AND REFRENCE DATA TYPES //
// PRIMITIVE DATA TYPES 

// after updating name1 will not change in the name2 beacuase both variable stored in different stack
// one updating will not affect the other one

let name1 = 'raj';
let name2= name1;
console.log("name1 is " , name1);
console.log("name2 is " , name2);

name1 = 'sagar'

console.log("after changing the value of name1");
console.log("name1 is " , name1);
console.log("name2 is " , name2);

// REFRENCE DATA TYPE
// surname1 value will also change the value of surname 2 in case of refrence data-type.

let surname1 = ['kumar']
let surname2 = surname1;
console.log("surname1 is",surname1);
console.log("surname2 is",surname2);

surname1.unshift('gupta')

console.log("after changing the value of surname1");
console.log("surname1 is " , surname1);
console.log("surname2 is " , surname2);


// HOW TO CLONE ARRAY //
// 1 WAY TO CLONE OTHER ARRAY

let array1  = ["name",'age','class','roll-no','school','education']

let array2 = array1.slice(0);
console.log(array1);
console.log(array2);

// 2 WAY TO CLONE OTHER ARRAY

let array3 = [].concat(array1);
console.log(array3)

// 3 WAY NEW WAY TO CLONE OTHER ARRAY

let array4 = [...array3];
console.log(array4)



// HOW TO CONCAT OTHER ARRAY 
// 1
let array5 = array1.slice(0).concat(["QUALIFICATION"]);
console.log(array5)

// 2
let array6 = [].concat(array1,['ADDRESS']);
console.log(array6)

//3 
let array7 = [...array1,...array6,...array5];
console.log(array7);