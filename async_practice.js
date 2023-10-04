// // synchronous js
// // js executed the code line by line and this also known as single threaded language 

// console.log("synchronous javascript start");
// for(let i=0; i<1000; i++){
//     console.log("running loop")
// }
// console.log("synchronous js end")

// // asynchronus javascript 
// // js execute the code line no 12..
// // js saw settimefunction they took the function and give to the web api to and api gave back the function to js after a while 

// // async works
// // asynchronus js start
// // async_practice.js:22 asynchronous js end
// // 1000async_practice.js:19 loop running async
// console.log("asynchronus js start");
// const id = setTimeout(()=>{
//     for(let i=0; i<1000; i++){
//         console.log("loop running async")
//     }
// },5000)
// // clearTimeout(id);

// console.log("asynchronous js end");

// // settimeot with 0 ms
// setTimeout(()=>{
//     console.log("aync js settimeout 1")
// },0)

// // line no 19 settimeout have 10 sec delayed
// // line no 27 settimeout have 0 sec delayed 

// // so the callback queue took line 27 and pass to the event loop and then they pass line 19 pass to the event loop

// // the event loop pass the function to the call stack and js execute the after the all codes runs in the call stack 



// // setinterval 
// // they run the code after a while 
// setInterval(()=>{
//     console.log("inside set interval")
// },50000)

// // setinterval project
// // small projects
// const body = document.body;
// const stopChange = document.querySelector(".btn");

// const id1 =  setInterval(()=>{
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.background = rgb;
//     console.log("color change running stop the change")
//     // stopChange.textContent = rgb
// },1000)

// stopChange.addEventListener('click',(()=>{
//     clearTimeout(id1)
//     stopChange.textContent = body.style.background;
// }))

// stopChange.addEventListener("dblclick",(()=>{
//     const id1 = setInterval(()=>{
//         const red = Math.floor(Math.random()*256);
//         const green = Math.floor(Math.random()*256);
//         const blue = Math.floor(Math.random()*256);
//         const rgb = `rgb(${red},${green},${blue})`
//         body.style.background = rgb;
//         stopChange.textContent = rgb
//         console.log("color change running stop the change")
//     },1000)

//     stopChange.addEventListener('click',(()=>{
//         clearTimeout(id1)
//         stopChange.textContent = body.style.background;
//     }))
// }))


// // callback in general
// function getTwo(num1,num2,callback,callback2){
//     console.log(num1,num2)
//     callback(num1,num2);
//     callback2(num1,num2);
// }

// // function addTwo(number1,number2){
// //     console.log(number1+number2);
// // }

// // function divideTwo(n1,n2){
// //     console.log(n1/n2)
// // }

// // getTwo(4,5,addTwo,divideTwo);


// getTwo(7,8,((a,b)=>{
//     console.log(a+b)
// }),((a,b)=>{
//     console.log(a/b)
// }))


// // ● Callbacks in asynchronous programming
// // callback through set timeout

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");

// setTimeout(() => {
//     heading1.textContent = "hello async callback"
//     heading1.style.color = "red"
        
//     setTimeout(() => {
//         heading2.textContent = "hello async callback"
//         heading2.style.color = "green"
        
//         setTimeout(() => {
//             heading3.textContent = "hello async callback"
//             heading3.style.color = "blue"

//             setTimeout(() => {
//                 heading4.textContent = "hello async callback"
//                 heading4.style.color = "yellow"

//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// // pyramid of doom
// // pyramid call back hell

// function pyramidDoom(element,text,color,time,onSucess,onFail){
//     setInterval(() => {
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSucess){
//                 onSucess();
//             }
//         }else{
//             if(onFail){
//                 onFail();
//             }
//         }
//     },time);
// }

// pyramidDoom(heading1,"hello joyfull","aqua",10000,(()=>{
//     pyramidDoom(heading2,"hello joyfull","red",8000,(()=>{
//         pyramidDoom(heading3,"hello joyfull","green",6000,(()=>{
//             pyramidDoom(heading4,"hello joyfull","blue",4000,(()=>{
//             }),(()=>{console.log("wrong heading element")}))
//         }),(()=>{console.log("wrong heading element")}))
//     }),(()=>{console.log("wrong heading element")}))
// }),(()=>{console.log("wrong heading element")}))

// // ● Intro to promises
// // promise matlab vaada 
// // promise infuture yaah to resolve hoge yaah reject hogi 
// // promise ki value to get karne ke  liy two methods hote  hai
// // then and catch
// // then ------  resolve()
// // catch -----  reject()

// const basket = ["bread",'masala','butter','cream','chips'];
// const pav = new Promise((resolve, reject) => {
//     if(basket.includes("bread")&& basket.includes("butter")){
//         resolve("pav bhaaji is ready")
//     }
//     else{
//         reject("pav bhaaji not found")
//     }
// })

// pav.then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// })


// function promiseHell(element,text,color,time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve()
//             }
//             else{
//                 reject()
//             }
//         },time)
//     })
// }

// promiseHell(heading2,"hello promises","#000000",5000).then(()=>{
//     return promiseHell(heading2,"hello promises","#000000",5000)
// }).then(()=>{
//     return promiseHell(heading3,"hello promises","#000000",5000)
// }).then(()=>{
//     return promiseHell(heading4,"hello promises","#000000",5000)
// })


// xmlhttprequest api
// fetch api through url by xmlhtttprequest

const URL = ("https://jsonplaceholder.typicode.com/posts")
console.log("xml start")
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET",URL);
// const state = xhr.readyState;
// console.log(state)

xhr.onload =()=>{
    if(xhr.status>=200&&xhr.status<300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data)
        const id = data[6].id

        const xhr2 = new XMLHttpRequest()
        const newxhr = `${URL}/${id}`
        xhr2.open("get",newxhr)
        console.log(xhr2)

        xhr2.onload = ()=>{
            if(xhr2.status>=200 && xhr2.status<300){
                const respData = JSON.parse(xhr2.response)
                console.log(respData);
            }
        }
        xhr2.send()


    }
    
}

xhr.send()
console.log("xml end")


// promisifying xml request

function promiseFunc(method,url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload = function(){
            if(xhr.status<=200 && xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject("something went wrong")
            }
        }

        xhr.onerror = function(){
            reject("wrong wrong wrong")
        }

        xhr.send();
    })
}

promiseFunc("get",URL).then((resp)=>{
    const response = JSON.parse(resp)
    console.log(response)
    return response
})
.then((data)=>{
    const respData = data[5].id
    return respData
})
.then((respData)=>{
    const newxhr = `${URL}/${respData}`
    return promiseFunc("get",newxhr)
}).then(newresp =>{
    const dataidlist = JSON.parse(newresp)
    console.log(dataidlist)
}).catch(()=>{
    console.error("something wrong in promise");
})

// fetch api
const URL1 = ("https://jsonplaceholder.typicode.com/posts")
fetch(URL1).then((response)=>{
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("synytacx");
    }
})
.then(data=>{
    console.log(data)
})
.catch(()=>{
    console.log("error")
})

// async await by arrow function on fetch api

export const asyncawait =async() =>{
    const resolve = await fetch(URL);
    if(!resolve.ok){
        throw new Error("syntax error")
    }
    const data = resolve.json()
    return data
}


// export {asyncawait}
export const firstname = "sagar"


asyncawait().then((data)=>[
    console.log(data)
])