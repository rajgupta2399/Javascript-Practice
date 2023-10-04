// OBJECT ORIENDTED IN JS -------- OOPS IN JS

// -------------- 1)
// METHODS
// FUNCTION INISDE OBJECT CALLED METHOD AND THIS KEYWORD

// when object key and the value of the key is function it's called method



// "Use Strict";
const person = {
    firstName : "sagar",
    age : 24,
    about : function(){
        console.log(`firstName is ${this.firstName} and age is ${this.age}`)
    }
}

console.log(person.firstName)
person.about()

// here's this keyword denoted the whole object in function
// when you call the function inside object we use this keyword dentes the whole object


// WINDOW KEYWORD
console.log(this)
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// CALL APPLY AND BIND
// CALL KEYWORD
// when we call the function inside the object by using call keyword and the call keyword represent this.object 

const person1 = {
    firstName : "raj",
    age : 18,
    about : function(hobby,eat){
        console.log(`firstname is ${this.firstName} and age is ${this.age},${hobby},${eat}`)
    } 
}
const person2 = {
    firstName : "akshat",
    age : 17,
    }
const person3 = {
    firstName : "priyanhsu",
    age : 17,
    }

person1.about()
person1.about.call(person2,'sleep','eat')
// APPLY KEYWORD
// apply  keyword same as call keyword we can the pass the parameter and the agrs during calling this. with using array we can pass many args inside array

person1.about.apply(person,["sleep",'eat'])


// BIND KEYWORD 
// bind keyword return the function which can store in the variable and we can call the functioon easily in future...

const new1 = person1.about.bind(person3,'person','eros')
new1()


// ARROW FUNCTION
// in arrow function this keyword not inside the function but this keyword of arrow function become the window

const person4 = {
    firstName : 'mukesh',
    lastName : "yadav",
    about : ()=> {
        // console.log(this)
        console.log(`firstname is ${this.firstName} and ${this.lastName}`)
    }
}

person4.about.call(person3);  //firstname is undefined and undefined


// Factory functions & discuss some memory related problems
// we have to call the function multiple time and they store the memory and in future we face memory problems
// .....
// ....


// function userData(firstName,lastName,email,age,address){
//     user = {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `your name is ${this.firstName} and lastname is ${this.lastName}`
//     }
//     user.isAge = function(){
//         return this.age >= 18;
//     }
// }

// const usera1 = userData('sagar','kumar','sagarkumar2499@gmail.com',24,'D-51,jain colony bawana')

// console.log(user)
// console.log(usera1.about())



// 1) __proto__ - just the refrence to find the address of the methods outside the function 
console.log("--------------- Proto ----------------")
const userMethod = {
    about : function(){
        return `your name is ${this.firstName} and lastname is ${this.lastName}`
    },
    isAge : function(){
        return this.age >= 18;
    },

    firstLetter : function(){
        if(this.firstName[0] === "s"){
            console.log('your name is start with s')
            if(this.firstName.length>=6){
                return 'length of your name is 5'
            }
            else{
                return 'your name length not more than 5 words'
            }
        }
        else{
            return 'your name is not start with s'
        }
        
    },
    userMail : function(){
        if(this.email.length>=25){
            return `your email id contain more than 20 alphabets`
        }
        return 'your email id contain not more than 20 alphabets'
    }


}
function userData(firstName,lastName,email,age,address){
    const user = Object.create(userMethod); // proto
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = userData('sagar','kumar','sagarkumargupta2499@gmail.com',24,'D-51,jain colony bawana')
const user2 = userData('raj','kumar','rajkumar2499@gmail.com',41,'bawana')

const user3 = userData('priyanshu','kumar','rajkumar2499@gmail.com',41,'bawana')

// console.log(user)
console.log(user1)
console.log(user2)
console.log(user1.about())
console.log(user1.firstLetter())
console.log(user1.userMail())


console.log(user2.about())
console.log(user2.firstLetter())
console.log(user2.userMail())

// 2) prototype :- empty object given by function which we can store the methods inside 


console.log("-------- Prototype ----------")

function userData1(userName,userLast,userAge,userAddress){
    const user = Object.create(userData1.prototype) // address
    user.userName  = userName;
    user.userLast  = userLast;
    user.userAge  = userAge;
    user.userAddress = userAddress;



    // prototype
    userData1.prototype.about = function(){
        return `your fullname is ${this.userName} ${this.userLast}`
    }

    userData1.prototype.isAge = function(){
        return this.age<=18;
    }

    return user;
}

const user4 = userData1('priyanshu','rohilla',19,'Bawana')
console.log(user4)
console.log(user4.about())


// 3) new keyword
// new keyword create the link between the proto and the prototype. we didnt to creat the prototypes methods inside the function
// just use this and new keyword

console.log("---------- new keyword --------")

function userData3(first,last,age,address){
    this.first = first;
    this.last = last;
    this.age = age;
    this.address = address;

    userData3.prototype.about = function(){
        return `your fullname is ${this.first} ${this.last}`
    }

    userData3.prototype.address1 = function(){
        return ` your address is ${this.address}`
    }

    return this;
}


const user5 = new userData3('mukesh','yadav',21,'lal-building')
console.log(user5)
console.log(user5.about())
console.log(user5.address1())


// class keyword
// classes in js is fake but we can use classes in case of creating prototypes 
// class consists of constructo,this,and new keyword

console.log("---------- classes keyword --------")
class CreateUserData{
    constructor(Userfirstname,Userlastname,Userage){
        this.Userfirstname = Userfirstname;
        this.Userlastname = Userlastname;
        this.Userage = Userage;
    }

    about(){
        return `your name is ${this.Userfirstname} ${this.Userlastname}`
    }

    firstLetter(){
        if(this.Userfirstname === "t"){
            return `your name is starting with T `
        }
        else{
            return` your name doesn't starting with T`
        }
    }
}

const user6 = new CreateUserData('Amit','gandhi',19)
console.log(user6.about())
console.log(user6.firstLetter())

// class inheritance
// extend property inherit the property of super class and give to the base class


// parent class called --- super class

// child class called --- base class // sub class
console.log("-------- class inheritance // use of super keyword")

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    isEat(){
        return ` ${this.name} is eating`
    }

    isCute(){
        if(this.age <= 3){
            return ' your animal is cute'
        }
        else{
            return ' your animal is not cute'
        }
    }
}

const janwar = new Animal('danny',5)
console.log(janwar)
console.log(janwar.isEat())
console.log(janwar.isCute())

// class inheritance and use of super keyword..
class Dog extends Animal{
    
    constructor(name,age,speed,lasts){
        console.log('super called')
        super(name,age)
        this.speed = speed;
        this.lasts = lasts;
    }

    get run(){
        return `your ${this.name} is running ${this.speed}`
    }

    get fullname(){
        return `your dog full name is ${this.name} ${this.lasts}`
    }

    set fullname(fullname){
        const[name,lasts] = fullname.split(" ")
        this.name = name;
        this.lasts = lasts;
    }
    

}

const janwar1 = new Dog('coco',2,30,'canadian')
console.log(janwar1)
console.log(janwar1.isCute())
console.log(janwar1.run)
console.log(janwar1.fullname)
janwar1.fullname = "danny boyle"
console.log(janwar1.fullname)
// getter keyword 
// is used to treat the method as property and when we call the function called method doesn't require to write ().

// setter keyword
// is used to change the constructor object value by using the destructuring and split method
