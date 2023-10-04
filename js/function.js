console.log("hello")

let num = parseInt(prompt('enter the number to check is even or odd :'))
function isEven(num){
    if(num%2==0){
        console.log("even")
        return true
    }
    else{
        console.log("odd")
        return false
    }
}

console.log(isEven(num))


let name1= prompt("enter your name to know your  first character : ");
function firstChar(name1){
    // console.log(name1[0])
    return name1[0]
}

console.log(firstChar(name1))


let number = parseInt(prompt("enter the number to find the target"));
let array = [1,2,3,4,5,6,7,8,9,10,100,99,98,97,96,95,94,93,92,91,90]

function find(array,number){
    for(let i=0; i<array.length; i++){
        if(array[i]===number){
            return i
        }
    }
    return -1
}

const ans = find(array,number);
console.log(ans)




// ARROW FUNCTION
let firstName = prompt("enter the name to check in the object");
let object = {
    name : "raj",
    name1 : "sagar",
    name2 : 'akshat',
    name3 : "priyanshu"
}

const findName = (firstName,object) =>{
    for(key in object){
        if(object[key]==firstName){
            return `your name found in our data : ${object[key]}`
        }
    }
    return "not founder"
}

const final = findName(firstName,object)
console.log(final)



// FUNCTION INSIDE FUNCTION 

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

// ------------------------------------------ 1 ==========================================

function findEmployee(emp_id,object1){
    for(let key in object1){
        if(object1[key].employee_id === emp_id){
            return `Your name is present in our data: ${object1[key].name}\n ${findSalary(emp_id, object1)}\n ${findQualification(emp_id,object1)}`;
        }
    }    

    

    function findSalary(emp_id,object1){
        for(let key in object1){
            if(object1[key].employee_id === emp_id){
                return `${object1[key].name} your salary is : ${object1[key].salary}`
            }
        }
        return "Salary information not found";
    }

    function findQualification(emp_id,object1){
        for(let key in object1){
            if(object1[key].employee_id === emp_id){
                return `${object1[key].name} your qualfication is : ${object1[key].qualification}`
            }
        }
    }

    return `employee id not found`
}


let ans2 = findEmployee(emp_id,object1);
console.log(ans2)


// ------------------------------------------ 2 ==========================================



function app(emp_id,object1){
    for(let key in object1){
        if(object1[key].employee_id===emp_id){
            console.log(`Your name is present in our data: ${object1[key].name}`)   
        }
    }
    const findSalary= (emp_id,object1) =>{
        
        for(let key in object1){
            if(object1[key].employee_id===emp_id){
                console.log(`Your name is present in our data and ur salary is : ${object1[key].salary}`)
            }
        }
    }

    const findQualification= (emp_id,object1)=>{
        
        for(let key in object1){
            if(object1[key].employee_id === emp_id){
                console.log(`${object1[key].name} your qualfication is : ${object1[key].qualification}`)
            }
        }
    }

    
    findSalary(emp_id,object1)
    findQualification(emp_id,object1)
    return 'not found'
    
}

app(emp_id,object1)

