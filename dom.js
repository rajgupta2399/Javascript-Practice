// const div = document.querySelector("h1");
// div.innerHTML = "hello"

// const todo = document.createElement("li")
// todo.textContent = "hello"
// // const todo1  = document.createElement("li")
// // todo.textContent = "bye"
// const div1 =document.querySelector(".ul")
// // div1.prepend(todo)
// div1.remove(todo)
// // div1.prepend(todo1)
// // console.log(todo)
// console.log(div1)

// const list = document.getElementsByClassName("heading").innerHTML = "hello"
// head.style.color = "red"



// dom tree
const docchild = document.childNodes[1];
const htmlchild = docchild.childNodes[0];
const htmlchild1 = docchild.childNodes[2];
const headchild = htmlchild.childNodes;
console.log(headchild)
console.log(headchild[4].nextSibling)

const bodychild = htmlchild1.childNodes
console.log(bodychild)
console.log(bodychild[1].childNodes)

