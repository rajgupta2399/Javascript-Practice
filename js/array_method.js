console.log('hello')


// ARRAY METHODS
// 1) ------------- FOR EACH METHOD
// FOR EACH METHOD IS USED TO RUN THE LOOP IN ARRAY AND OBJECT THEY HAVE THE DEAFULT PARAMETER KNOWN AS INDEX... IT PROVIDE INDEX VALUE TO THE FUNCTION

// ---- IN FOR EACH METHOD WE CAN PRINT THE OUTPUT RULE
console.log("ARRAY METHODS ---------- 1) ------------- FOR EACH METHOD")
const numbers  = [10,20,30,40,50,55,87,99,100];
// function multiplyNum(numbers,index){
//     // for(let i=0; i<=numbers; i++){
//         console.log(`index is : ${index}`)
//         console.log(`${numbers}*2 = ${numbers*2}`)
//     }

// for(let i=0; i<numbers.length; i++)[
//     multiplyNum(numbers[i],i)
// ]


// function mulNum(numbers){
//     for(let i=0; i<numbers.length; i++){
//         console.log(`index is : ${i}`)
//         console.log(`${numbers[i]}*2 = ${numbers[i]*2}`)
//     }
// }

// mulNum(numbers)


numbers.forEach(function(number){
    console.log(`number is ${number} and multiply by 2 its value is ${number*2}`)
}) 



// numbers.forEach(function(mulTwo))

const person = [
    {firstName: 'raj' , age :18},
    {firstName: 'sagar' , age :24},
    {firstName: 'akshat' , age :17},
    {firstName: 'mukesh' , age :19}
]

person.forEach(function(person){
    console.log(`${person.firstName}`)
})

for(let j of person){
    console.log(j.firstName)
}

for(let k=0; k<person.length; k++){
    console.log(person[k].firstName)
}


// 2) ----- MAP METHOD 
// MAP METHOD IS A PROGRAM WHICH RETURN SOMETHING WE HAVE CREATE A VARIABLE TOO STORE THAT AND AFTER WE CAN PRINT THE OUTPUT...
// it will create the new array during return something we have to store that and after print

console.log('ARRAY METHOD ---- MAP METHOD')


const new1 = numbers.map(function(number){
    return number*number
})

console.log(new1)

function square(number){
    return number*number
}

const newSqure = numbers.map(square)
console.log(newSqure)


function person1(person){
    return person.firstName
}

const newPerson = person.map(person1)
console.log(newPerson)


console.log("ARRAY METHOD  ------- FILTER METHOD")

console.log("USING CALLBACK FUNNCTION")
function isEven(number){
    return number%2==0
}

const ans0 = numbers.filter(isEven)
console.log(ans0)


console.log("USING ANOMONOUS FUNCTION")

const new2 = numbers.filter(function(number){
    return number%2==0;
})

console.log(new2)

console.log("USING ARROW FUNCTION")

const new3 = numbers.filter((number)=>{
    return number%2!==0;
})

console.log(new3)

const players = [
    {name : "Dhoni",age:40,team :["India","national"]},
    {name : "stokes",age:25,team :["England","international"]},
    {name : "Dhoni",age:29,team :["Australia","international"]},
    {name : "Dhoni",age:28,team :["South Africa","international"]}
]



console.table(
    players.filter(player => player.team.includes("national"))
)


const filter = players.filter((player)=>{
    return player.age<30;
})

console.table(filter)
// console.log(table(filter))

console.log("ARRAY METHOD -----  REDUCE METHOD")

const flipkart = [
    {productID:1,productName:"Oppo K10 5G", productPrice:18000},
    {productID:2,productName:"Acer",productPrice:30000},
    {productID:4,productName:"Croma",productPrice:12000},
    {productID:5,productName:"Croma",productPrice:1200},
    {productID:6,productName:"Croma",productPrice:120}
]

const amazon = flipkart.reduce((totalPrice,currentPrice)=>{
    return totalPrice + currentPrice.productPrice
},0)

console.log("total price of the cart : "+amazon)
console.table(flipkart)

console.log("ARRAY METHOD ----- SORT METHOD MUTATAE THE ORIGINAL ARRAY MEANS CHANGE THE ORIGINAL ARRAY")


const Numbers = [100,400,10,50,2,1000,450,600,70,40]
const ascOrder = Numbers.sort()
console.log(ascOrder)  // [10, 100, 1000, 2, 40, 400, 450, 50, 600, 70]

// wrong way 
// js has its own ascii value if you have to sort the array js consider the array as string and done with his ascii value 


console.log("ASSCENDING ORDER BY ARROW FUNCTION")
const ascOrder1 =  Numbers.sort((a,b) =>{
    return a-b
})

console.log(ascOrder1)


console.log("ASSCENDING ORDER BY PASSING THE FUNCTION -------- CALLBACK FUNCTION")
function desOrder(a,b){
    return b-a
}
const desOrder1 = Numbers.sort(desOrder)
console.log(desOrder1)


console.log("ASSCENDING ORDER BY ARRAOW FUNCTION")

const lowToHigh = flipkart.slice(0).sort((a,b)=>{
    return a.productPrice - b.productPrice
})

console.table(lowToHigh)

const highToLow = flipkart.slice(0).sort((a,b)=>{
    return b.productPrice - a.productPrice
})

console.table(highToLow)

console.log("ARRAY METHOD ----- FIND METHOD USED TO FIND THE ELEMENT AND THE CONDITTION WILL TRUE THEY PRINT THE FIRST OCCURENCE IN THE ARRAY")

const animal = ['dog','lion','tiger','sparrow','kingfisher','dog','cat','bat']
const find = animal.find((string) =>{
    return string.length>4;
})

console.log(find)


console.log("ARRAY METHOD ----------- EVERY METHOD IS USED TO CHECK THE CONDITON IT WILL BE TRUE AND ALL ELEMENTS WILL STAND ON THE CONDTITION IF THERE ANY ONE ELEMENT NOT EQUAL TO CONDITON WHOLE ANS WILL FALSE...YES THEY RETURN BOOLEANS")

const num = [2,4,6,8,10]
const every = num.every((num)=>{
    return num%2==0;
})

console.log(every)  // ---------------------------- TRUE ------- all numbers are even


const num1 = [2,4,6,8,9]
const every1 = num1.every((num)=>{
    return num%2 ==0;
})

console.log(every1)  // ---------------------------- FALSE ------ there is one num which is not even(9)


console.log("ARRAY METHOD ----------- SOME METHOD IS USED TO CHECK THE CONDITON IT WILL BE TRUE AND MUST BE ONE ELEMENT STAND ON THE CONDTION")

const num2 = [0,1,3,5,7,9]
const findEven = num2.some((num)=>{
    return num%2==0;
})

console.log(findEven)


// Fill method
console.log("ARRAY METHOD ----------- FILL METHOD IS USED TO FILL THE VALUE BY OUR OWN THEY CHANGE THE ORIGINAL ARRAY WE CAN ADD VALUE FORM START TO END INDEX ")

const num3 = [100,99,98,97,96,95,94,93,92,91,90]
const fill = num3.fill(-1,2,5) // value -- -1   // starting index // end index
console.log(fill)




console.log("ARRAY METHOD ----------- SPLICE METHOD IS USED TO INSERT OR DELETE THE ELEMENT IN THE MIDDLE OF THE ARRAY")

const friends = ['mukesh','sudhanshu','tanish','amit','rupesh']
friends.splice(2,3,"himanshu",'lakshay','rajat')

console.log(friends)

