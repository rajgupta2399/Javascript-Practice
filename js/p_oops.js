// 1) proto 

const userMethod = {
    fullName : function(){
        return `your fullname is ${this.firstName} ${this.lastName}`
    },
    isAge : function(){
        return this.age <= 18
    }
}
function createUserData(firstName,lastName,age,Address){
    const user = Object.create(userMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age=age;
    user.Address=Address;

    return user;
}

const person = createUserData('sagar','kumar',24,'Bawana')
console.log(person)
console.log(person.fullName()) 

// 2) prototype
// create empty object for the function where you can define the prototype or methods inside the prototype 

function createUserData1(userName,userLastName,userAge,userAddress){
    const user = Object.create(createUserData1.prototype)
    user.userName = userName;
    user.userLastName = userLastName;
    user.userAge = userAge;
    user.userAddress= userAddress;

    createUserData1.prototype.about = function(){
        return `your address is ${this.userAddress}`
    }

    createUserData1.prototype.fullName = function(){
        return `your fullname is ${this.firstName} ${this.lastName}`
    }

    return user;
}

const person1 = createUserData1('priyanshu' ,'Rohilla',19,'Bawana-poothKhurd')
console.log(person1)
console.log(person1.about())

// 3) New keword
// new keyword consist this and during calling the prototype method just user the new key the address of the  Object create will not be use in this case 

function CreateUserData2(first,last,age,graduate){
    this.first = first;
    this.last = last;
    this.age=age;
    this.graduate = graduate;

    CreateUserData2.prototype.graduation = function(){
        return `you are graduated from ${this.graduate}`
    }


}

const person2 = new CreateUserData2('mukesh','yadav',22,'B.com')
console.log(person2)
console.log(person2.graduation())

// 4) Classes in js 
class CreateUserData3{
    constructor(firstname,lastname,friends){
        this.firstname = firstname;
        this.lastname=lastname;
        this.friends =friends;
    }
    // getter as get treat method as props/ property
    get friendsname(){
        return ` your name is ${this.firstname} ${this.lastname} and your friend name is ${this.friends}`
    } 
    get fullName(){
        return `your fullname is ${this.firstname} ${this.lastname}`
    } 
}

const person3 = new CreateUserData3('mukesh','kumar','raj')
console.log(person3)
console.log(person3.friendsname)
console.log(person3.fullName)


// prototypal inheritance

class CreateUserData3Pet extends CreateUserData3{
    constructor(firstname,lastname,friends,dogName){
        super(firstname,lastname,friends)
            this.dogName = dogName;
    }

    get aboutOwner(){
        return `your name is  ${this.firstname} ${this.lastname} and your pet name is ${this.dogName}`
       
    }

    // set fullName(fullName){
    //     const [firstname,lastname] = fullName.split(" ")
    //     return ` your name is ${this.firstname} ${this.lastname}`
    // }
}

const person4 = new CreateUserData3Pet('akshat','gupta','raj','coco')
person4.fullName = "sagar kumar"
console.log(person4.fullName)
console.log(person4.aboutOwner)