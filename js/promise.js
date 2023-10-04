// intro to promises
// promises have two value (resolve and reject)..prmoise in fututre will be resolve or reject
// and after the conditions we have then and catch keyword to check the resolve and promise data what we have achieved
// then keyword also return the promise we can update the promise and then we print the updated resolve and after doing this we created the promise chaining

console.log("script start promise")
const pasta  = ["cheese","penny pasta","vegetables",'maynaise','sause']


setTimeout(()=>{
    console.log("inside time out")
},1000)

const cheesePasta = new Promise((resolve,reject)=>{
    if(pasta.includes("cheese")&& pasta.includes("penny pasta") && pasta.includes("vegetables")){
        resolve("you can eat pasta")
    }
    else{
        reject("you cannot eat pasta")
    }
})

for(let i=0; i<10; i++){
    const otp = Math.round(Math.random()*9000+1000)
    console.log(`otp is ${otp} and serial number is ${i}`)
}

cheesePasta.then((resolve)=>{
    console.log(resolve)
}).catch(()=>{
    console.log("pasta doesnt exist")
})


console.log("script end")


// function returning promise
// we have to just call the function to print the what we get from the pronise its resolve or reject..

let age = 19;
function funcPromise(age){
    return new Promise((resolve,reject)=>{
        if(age<=18){
            resolve("hello, i will help u..!!")
        }
        else{
            reject("hello, i am not help u..!!")
        }
    })
}

funcPromise(age).then((accept)=>{
    console.log(accept)
}).catch((error)=>{
    console.log(error)
})

// promises and settimeout
// inside promises we can use settimeout call back

// callback queue -------- settimeout func
// microtask queue ------- promises
// js first return the microtask queue and then they return the callback queue

// promise inside settimeout func.. 
// we use promise asynchronously putting settimeout fnction and pass the time and js will return the promise statement after while



function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = false
        setTimeout(()=>{
            if(value){
                resolve("value is true")
            }
            // value = false;
            else{
                reject("value is false")
            }
        },1000)
    })
}

setTimeout(()=>{
    console.log("inside time out 1")
},1000)

myPromise().then((accept)=>{
    console.log(accept)
}).catch((error)=>{
    console.log(error)
})

// promise chaining
let name1 = "sagar"
function newPromise(name1){
    return new Promise((resolve, reject) => {
        if(name1[0] === "s"){
            resolve("your name is start with S")
        }
        else{
            reject("your name is not starting with S")
        }
    })
}



newPromise(name1).then((accept)=>{
    console.log(accept)
    name1 += 'raj'
    return name1
    
}).catch((reject)=>{
    console.log(reject)
})



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
//
function updateHeading(element,text,color,time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve("now");
            }else{
                reject();
            }
        },time)
    })
}

updateHeading(heading1,"one","red",1000)
.then(()=>{
    return updateHeading(heading2,"two","green",1000);
}).then(()=>{
    return updateHeading(heading3,"three","blue",1000);
}).then(()=>{
    return updateHeading(heading4,"four","aqua",1000);
}).then(()=>{
    return updateHeading(heading5,"five","brown",1000);
}).then(()=>{
    return updateHeading(heading6,"six","orange",1000);
}).then(()=>{
    return updateHeading(heading7,"seven","salmon",1000);
}).then(()=>{
    return updateHeading(heading8,"eight","yellow",1000);
}).then(()=>{
    return updateHeading(heading9,"nine","purple",1000);
}).then(()=>{
    return updateHeading(heading10,"ten","indigo",1000);
})

const URL = ("https://jsonplaceholder.typicode.com/posts")
const xhr = new XMLHttpRequest();
console.log(xhr)

// console.log(xhr.readyState) // 0
// xhr.open("GET",url)
// xhr.onreadystatechange = function(){
//     console.log(xhr)
//     console.log(xhr.readyState) // 2 3 4
//     if(xhr.readyState === 4){
//         console.log(xhr.response) // it will return object like but its called json in string data type

//         const resp = xhr.response; // data
//         const data = JSON.parse(resp);
//         console.log(data) // object 

//     }
//     console.log(xhr.readyState) // 2 3 4
// }


console.log(xhr.readyState)
xhr.open("GET",URL)

xhr.onload= ()=>{
    if(xhr.status >=200 && xhr.status<300){
        const resp = xhr.response;
        const data = JSON.parse(resp)
        console.log(data)

        const id4 = data[8].id;


        const xhr2 = new XMLHttpRequest()
        const newURL = `${URL}/${id4}`
        xhr2.open("GET",newURL)

        xhr2.onload = () =>{
            const user = xhr2.response;
            const userData = JSON.parse(user);
            console.log(userData);
        }
        xhr2.send()

    }
}


console.log(xhr.readyState)


xhr.send()
// when readystate 0 the xhr request not called yet through open()
// when readystate 1 the xhr request has c been called through open()
// when readystate 2 the send has been called and the headers and  status are available..
// when readystate 4 the xhr completed the operation it will make response..



// PROMISE CHAINING FOR XMLHTTPREQUEST
function promiseXML(method, url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status<=200&&xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject("somehing went wrong")
            }
        }
        
        xhr.onerror = function(){
            reject("hurray")
        }
        
        xhr.send();
    })
}
const print = document.querySelector("#id1")

promiseXML("GET",URL)
    .then((response)=>{
    const data = JSON.parse(response)
    console.log(data)
    return data;
}).then((data)=>{
    const id =data[3].id;
    return id;
}).then((id)=>{
    const id1 = `${URL}/${id}`;
    return promiseXML("GET",id1);
}).then((mewresp)=>{
    const newparse = JSON.parse(mewresp)
    print.innerHTML = newparse;
    console.log(newparse)
})





    
fetch(URL).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log("fetch url")
    console.log(data)
})


