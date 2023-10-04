// && AND || OPERATOR
// &&--- and operator must be true in more than one case

let firstName = 'raj'
let age = 18

if(firstName[0]==='s' && age>=18){
    console.log("name start with s and age is above 18 ")
}
else{
    console.log("invalid age and name")
}

// || --- or operator must be one condtion will be true

let lastName = 'raj';
let age1 = 18;

if(firstName[0]==='s' || age>=18){
    console.log("name start with s and age is above 18 ")
}
else{
    console.log("invalid age and name")
}



// NESTED IF ELSE CONDITION
let winningNumber = 7;
let guessNumber = parseInt(prompt("guess the number to win the game : "))

if(guessNumber===winningNumber){
    console.log('your guess is right')
}
else{
    if(guessNumber<winningNumber){
    console.log("too low")
    }
    else{
        console.log("too high")
    }
}

// SWITCH CASE 

let day = parseInt(prompt('enter the day to guess the weak name : '))

switch(day){
    case 0:
        console.log("its Sunday");
        break
    case 1:
        console.log("its Monday");
        break
    case 2:
        console.log("its Tuesday");
        break
    case 3:
        console.log('its Wednesday');
        break
    case 4:
        console.log("its Thursday");
        break
    case 5:
        console.log("its Friday");
        break
    case 6:
        console.log('its Saturday');
        break
    default:
        console.log('invalid day and number');
}

