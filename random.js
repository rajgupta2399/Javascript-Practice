const btn = document.querySelector("button");
console.log(btn)
const head = document.querySelector("h1")
const body = document.body;
console.log(body)
const span = document.querySelector(".ranSpan")
console.log(span)

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`
    console.log(randomColor)
    return randomColor;
}

btn.addEventListener("click",()=>{
    const randomColor = randomColorGenerator(); 
    body.style.backgroundColor = randomColor
    head.style.backgroundColor = randomColor;
    span.textContent = randomColor;
})