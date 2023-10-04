// synchronous programming or asynchronous programming language --- js
// js is a synchronous programming language and also known as single threaded language

console.log("loop started")
console.log("")

for(let i=0; i<10; i++){
    console.log("loop runnig")
}
console.log("js executed the code line by line so the loop is blocking after that code hence js is single threaded language")
console.log("")
console.log("loop ended")

// js executed the code line by line so the loop is blocking after that code hence js is single threaded language

// asynchronous programing in js 
// we can change the execution code of js by async js

console.log("async js")
console.log("script start")

setTimeout(()=>{
    console.log("settimeout")
},1000)

setTimeout(()=>{
    console.log("settimeout1")
},2000)

setTimeout(()=>{
    console.log("settimeout2")
},5000)

console.log("script end")


// // 1st case :-
// // in setitmeout function the js executee the code on line 20
// // they print that then they saw setTimeout function and js give the function to web browser and say give me back the callback function after 1sec 
// // jab tak me apna baaki ka code run karwa saku
// // then js print line 26
// // after 1sec...
// // browser give back the function to the callback queue
// // the callback queue pass the function to the event loop and the event loop check all code runs after the pass to the call stack and the js print the callback function 

// // 2nd case :-
// // we can treat the js in async time and change the js code to the sync language .... for example
// // in 2nd case we didnt print the set time out call back queue

console.log("async js with sync js script start ")
const id = setTimeout(()=>{
    console.log("inside settime out async js")
},1000)

clearTimeout(id);
console.log("async js with sync js script end ")


const body = document.body;
const stopChange  = document.querySelector("button")


const id1 = setInterval(()=>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    const rgb = `rgb(${red},${green},${blue})`

    body.style.backgroundColor = rgb;
},1000)

stopChange.addEventListener("click",function(){
    clearInterval(id1);
    stopChange.textContent = body.style.backgroundColor;
})

stopChange.addEventListener("dblclick",function(){
    const id1 = setInterval(()=>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
    
        const rgb = `rgb(${red},${green},${blue})`
    
        body.style.backgroundColor = rgb;
        stopChange.textContent = rgb;
    },1000)

    stopChange.addEventListener("click",function(){
        clearInterval(id1);
        stopChange.textContent = body.style.backgroundColor;
    })
})


// // callback function 
// // synchronous programming callback function in js 

function getTwoNumbers(num1,num2,callback){
    console.log(num1,num2)
    callback(10,10)
}


function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}

getTwoNumbers(4,5,addTwoNumbers)


function getTwo(n1,n2,onSucess,onFail){
    if(typeof n1 === "number" && typeof n2 === "number"){
        onSucess(n1,n2)
        console.log(n1,n2)
    }
    else{
        onFail()
    }
}

getTwo(4,8,(nn1,nn2)=>{
    console.log(nn1+nn2)
},()=>{
    console.log("wrong data type")
})


function gTwo(a1,a2,onSucess,onFail){
    if(typeof a1 === "number" && typeof a2 === "number"){
        onSucess(a1,a2)
    }
    else{
        onFail(a1,a2)
    }
}



function aTwo(a1,a2){
    console.log("inside 1st callback")
    console.log(a1+a2)
}

function rTwo(){
    console.log("inside 2nd callback")
    console.log("WRONG DATA TYPE")
}

gTwo(5,15,aTwo,rTwo)



function show(a,b,divideAB,multiplyAB){
    console.log(a,b)
    divideAB(10,20)
    multiplyAB(10,7)
}


show(4,5,(a,b)=>{
    console.log(a/b)
},(a,b)=>{
    console.log(a*b)
})

// Asynchronous callback function
// using callback as asynchronous programming and we use settimeout function to callback as async in js
// after that we created the pyramid doom or call back hell...
const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

setTimeout(()=>{
    heading1.textContent = "one";
    heading1.style.color = "red"
        setTimeout(()=>{
            heading2.textContent = "two"
            heading2.style.color = "blue"
                setTimeout(()=>{
                    heading3.textContent = "three"
                    heading3.style.color = "green"
                        setTimeout(()=>{
                            heading4.textContent = "four"
                            heading4.style.color = "purple"
                                setTimeout(()=>{
                                    heading5.textContent = "five"
                                    heading5.style.color = "orange"
                                        setTimeout(()=>{
                                            heading6.textContent = "six"
                                            heading6.style.color = "yellow"
                                                setTimeout(()=>{
                                                    heading7.textContent = "seven"
                                                    heading7.style.color = "aqua"
                                                },1000)
                                        },3000)
                                },2000)
                        },1000)
                },2000)
        },2000)                     
},1000)


// pyramid of doom
// callback hell

function pyramidDoom(element,text,color,time,onSucess,onFail){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            // element.time = time;
            if(onSucess){
                onSucess();
            }
        } else{
            if(onFail){
                onFail();
            }
        }
    },time)
}

pyramidDoom(heading1,"one","red",1000,()=>{
    pyramidDoom(heading2,"two","green",1000,()=>{
        pyramidDoom(heading3,"three","blue",1000,()=>{
            pyramidDoom(heading4,"four","yellow",1000,()=>{
                pyramidDoom(heading5,"five","orange",1000,()=>{
                    pyramidDoom(heading6,"six","aqua",1000,()=>{
                        pyramidDoom(heading7,"seven","purple",1000,()=>{
                            pyramidDoom(heading8,"two","green",1000,()=>{
                                pyramidDoom(heading9,"two","green",1000,()=>{
                                    pyramidDoom(heading10,"two","green",1000,()=>{
                                    },()=>{console.log("wrong h10 element")})
                                },()=>{console.log("wrong h9 element")})
                            },()=>{console.log("wrong h8 element")})
                        },()=>{console.log("wrong h7 element")})
                    },()=>{console.log("wrong h6 element")})
                },()=>{console.log("wrong h5 element")})
            },()=>{console.log("wrong h4 element")})
        },()=>{console.log("wrong h3 element")})
    },()=>{console.log("wrong h2 element")})
},()=>{console.log("wrong h1 element")})

