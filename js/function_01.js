// LEXICAL SCOPE OR GLOBAL SCOPE OF A FUNCTION 
// I CASE

function myApp(){
  const myVar = "value69"
  console.log(myVar)
      function myFunc(){
        const myVar = "value79"
      console.log(myVar)
  } 
  myFunc()
}

myApp()

// CALLING myApp() FUNCTION THEY WILL HAVE TO PRINT THE myVar NAME VARIABLE AND THEY FOUND THE SAME NAME VARIABLE INSIDE THE FUNCTION THEY WILL PRINT

// AFTER PRINTING THEY CHECK 2nd FUNCTION ALSO CALLING myFunc() FUNCTION THEY HAVE TO PRINT THE myVar NAME VARIABLE AND THEY FOUND THE SAME NAME VARIABLE INSIDE THE FUNCTION THEY WILL PRINT...

// BOTH STATEMENTS BOTH FUNCTION HAVE THEIR OWN FUNCTION THEY PRINT THE myVar VARIABLE


// II CASE

const myVar = "value 07"
function myApp1(){
  console.log(myVar)

    function myFunc1(){
      console.log(myVar)
    }
    myFunc1()
  
}
myApp1();



// BLOCK SCOPE AND FUNCTION SCOPE 
// BLOCK SCOPE - when your declare the variable by using let and const in { } block...they will work like block scope you cannot access that variable through global scope..

{
  let name = "raj"
  console.log(name)
}

{
  const age = 18
  console.log(age)
}

// BUT NOT IN THE VAR CASE THEY WILL ACT LIKE FUNCTION SCOPE...

{
  var gender = "male"
  console.log(gender)
}



// DEFAULT PARAMETERS
// WHEN YOU PASS TWO AND PARAMETER AND DURING PASSING THE ARGUMENT YOU PASS ONLY ONE ARGUMENT AND THE SECOND ONE IS CALLED DEAFULT PARAMETER THEY ACT LIKE UNDEFINED..

function addTwo(a,b=0){ // the b default parameter set to 0 when user didnt pass the second argument
  return a+b
}

const ans = addTwo(4);
console.log(ans)


// REST PARAMETERS
// WHEN YOU ADD TWO PARAMETER AND DURIING PASSING ARGUMENT YOUR PASS MORE THAN TWO ARGUMENTS THE REMAINING ARGUMENT WILL STORE IN THE ARRAY..LIKE

function subTwo(a,b,...c){
  console.log(c)
  return a-b
}

const ans1 = subTwo(6,7,8,9.34,5); // the rest argyu will store in the c array..
console.log(ans1)



// PARAMETER DESTRUCTURING 
// IS USED TO DESTRUTURE THE PARAMETER DURINNG OBJECT CASE EXAMPLE JUST LIKE DESTRUCTURE THE OBJECT..LIKE 

const person = {
  name : 'raj',
  age : 18,
  gender : 'male'
}

function myObj({name,gender}){
  console.log(name)
  console.log(gender)
}

myObj(person);


// CALL BACK FUNCTION //

function myFunc1(name1){
  console.log(`hello ${name1}`)
}

function myFunc2(){
  console.log('hello console')
}

function myFunc(callback){
  console.log('hello function 10')
  callback('harshit')
  myFunc2()
}

myFunc(myFunc1,myFunc2);


// ------------------------------------------------------------------------
// call back fuunction  

let emp_id = parseInt(prompt("enter the ID to check your data : "));
let object1 = [
    {employee_id : 123456789,name : "raj" , salary : 50000, qualification : "12th pass & BCA"},
    {employee_id : 122334456,name : "sagar" , salary : 80000, qualification : "12th pass & BCA"},
    {employee_id : 677889012,name : "akshat" , salary : 10000, qualification : "12th pass & BCA"},
    {employee_id : 233445566,name : "priyanshu" , salary : 20000, qualification : "12th pass & BCA"},
    {employee_id : 677889901,name : "aadhya" , salary : 30000, qualification : "Play School"},
    {employee_id : 122334567,name : "adya" , salary : 40000, qualification : "Nursery"},
    {employee_id : 899001122,name : "sakshi" , salary : 10000, qualification : "8th class"},
    {employee_id : 344556677,name : "anil" , salary : 30000, qualification : "B.com"},
    {employee_id : 899001233,name : "manish" , salary : 30000, qualification : "B.com"},
    {employee_id : 455678890,name : "chanchal" , salary : 10000, qualification : "10th"},
    {employee_id : 112233445,name : "jaiko" , salary : 10000, qualification : "9th"},
    {employee_id : 566778899,name : "doraemon" , salary : 90000, qualification : "2022 century"},
    {employee_id : 667788990,name : "nobita" , salary : 100000, qualification : "2021 century"}
]


function findName(emp_id,object1){
  for(let key in object1){
    if(object1[key].employee_id === emp_id){
      console.log(`hello ${object1[key].name}, and your salary is ${object1[key].salary}, and your qualification is ${object1[key].qualification}`)
    }
  }
  return 'not found'
}

function findEmployee(emp_id,object1){
  
  for(let key in object1){
    if(object1[key] != emp_id){
      console.log('not found')
    }
    break;
  }
    for(let key in object1){
    if(object1[key].employee_id === emp_id){
      console.log(`hello sir your id is present in our data : ${object1[key].employee_id}`)
    }
  }

  findName(emp_id,object1)
  
}


findEmployee(emp_id,object1);



// FUNCTION RETURN FUNCTTION 

function ducatEmployee(emp_id,object1){
  for(let key in object1){
        if(object1[key] != emp_id){
          console.log('not found')
        }
        break;
      }
      
  for(let key in object1){
      if(object1[key].employee_id === emp_id){
          console.log(`hello sir your ID is present in our data ${object1[key].employee_id}`)
      }
  }
  
  function ducatName(emp_id,object1){
    for(let key in object1){
      if(object1[key].employee_id === emp_id){
        return `hello ${object1[key].name} your salary is ${object1[key].salary} and your salary is credited at the month end`
      }
    }
  }
  return ducatName;
}

const ans3 = ducatEmployee(emp_id,object1);
console.log(ans3(emp_id,object1))



function myFunc(){
  console.log('hello function return1')

  function hello(a,b){
    return a+b
  }
  return hello
}

const ans4 = myFunc()
console.log(ans4(5,5))
