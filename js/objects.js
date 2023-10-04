console.log("hello")

// INTRO TO BOJECTS 
// OBJECTS STORE KEY VALUE PAIR

const person = {
    name:'raj',
    age : 18,
    school : 'Govt',
    hobbies : ["cricket",'listening','sleeping']
}
console.log(person)

// HOW TO ACCESS KEY VALUE PAIRS 

Hobby = person.hobbies;
console.log(Hobby.concat(['dancing','singing']));

Hobby1 = [...Hobby]
console.log(Hobby1)

// HOW TO ADD KEY VALUE PAIRS TO OBJ...

person.gender = 'male'
console.log(person)

// just ARRAY
Hobby2 =Hobby.slice(0);
console.log(Hobby2)


// -----------------------------------------------

// DOTS v/s NOTATATION TO ACCESS

const classes = {
    name : 'sagar',
    age : 24,
    school : 'Govt',
    "hobbies like" : ["sleeping",'volleyball','cricket']
}

console.log(classes);
console.log(classes.name)
console.log(classes["hobbies like"])

// USING DOT WE CAN ACCESS THE KEY SINGLE WORD LIKE NAME,AGE NOT LIKE "HOBBIES LIKES" ETC.

// USING NOTATION WE CAN ACCESS THE KEY VERY EASILY TO GET THE VALUE CHAHE KEY KITNI BDI HO..


// using dot
classes.gender = "male"
console.log(classes);

// using notation
let key = "email"
classes[key] = "rajkumar2399@gmail.com"
console.log(classes);


