
// SPREAD OPERATORS IN OBJECTS 

// ADDING TWO OBJ TO MAKE NEW OBJECTS AND WE CAN ADD ALSO KEY AND VALUE PAIRS


const classes = {
    name : 'sagar',
    age : 24,
    school : 'Govt',
    "hobbies like" : ["sleeping",'volleyball','cricket']
}


let key1  = "objkey1"
let key2 = "objkey2"

let value1 = "objvalue1"
let value2 = "objvalue2"

const obj = {

}

obj[key1] = value1;
obj[key2] = value2;

const newObject = {...obj,...classes,obj:"destruct"}
console.log(newObject);



// NOTE 
// SAME KEY(PROPS) NOT EXIST IN OBJ THEY WILL OVERLAP OR OVERWRITE THE OTHER ONE


// -----------------------------------------------

// OBJECT DESTRUCTURING
// BY DEFAULT SAME KEY NAME IS USED IN TO DESTRURE THE OBJ AND STORE THIER VALUE TO VARIBALS

const band = {
    bandName :"led zepplin",
    famousSong:"stairway to the heaven",
    artistName:"Raj"
}

const {bandName, artistName} = band
console.log(bandName)
console.log(artistName)


//---------------------------------------------------

// OBJECT INSIDE ARRAY 

const objarray = [
    {userName1 : 'raj', age1 : 19, school1 : 'govt'},
    {userName2 : 'sagar', age2 : 24, school2:'govt'},
    {userName3 : 'aksh', age3 : 17, school3 : 'pvt'}
]

for(let objArray of objarray){
    console.log(objArray);
}


// NESTED OBJECT DESTRUCTION


// ACCESS ONLY ARRAY
const [user1,user2,user3] = objarray;
console.log(user1)
console.log(user2)
console.log(user3)

// ACCESS ARRAY AND INSIDE OBJECT

const [{userName1}, , {school2}] = objarray;
console.log(userName1)
console.log(school2)

