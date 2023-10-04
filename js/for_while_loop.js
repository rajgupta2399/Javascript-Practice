console.log("hello");

let num = parseInt(prompt("enter the number to run the while loop :" ));
let i = 0;
while(i<=num){
    console.log(i);
    i++;
}


// SUM OF N NATURAL NUMBER 

let number = parseInt(prompt("enter the number to run the while loop :" ));
let j =0
let total = 0
while(j<=number){
    total = total+j
    j++;
}
console.log(total)

let num1  = (number*(number+1)/2);
console.log(num1)


// FACTORIAL NUMBER
let number1 = parseInt(prompt("enter the number to run the while loop :" ));
let k = 1;
let fact = 1;

while(k<=number1){
    fact *=k
    k++;
}
console.log(fact);


//  FOR LOOP INTRO

for (let l=0; l<=10; l++){
    console.log(l)
}


// BREAK AND CONTINUE KEYWORD

// BREAK --- in break keyword loop will break and stop running when condition is true

let dumb = 100;
for(let a = 0; a<=dumb; a++){
    console.log(a)
    if(a===70){
        break
    }
}


// CONTINUE --- in continue keyword loop will continue and running continously without breaking but when condition is true the loop value will not print in console...

let dumb1 = 50;
for(let a = 0; a<=dumb1; a++){
    if(a===25){
        continue
    }
    console.log(a)
}


// DO WHILE LOOP
// IF CONDITION IS FALSE DO WHILE LOOP WILL RUN ONCE AND THEN THEY WILL CHECK THE CONDITION IS TRUE OR FALSE

let number3 = 10;
let b = 0;
do{
    console.log(b);
    b++
}while(b<=9)
