/*const age = 12;
age >= 12 ? console.log(`i like drink tea`) : console.log(`i hate drinke tea`);

const whatILike = 12;
const value1 = whatILike >= 14 ? "tea" : "coffe";
console.log(value1);

let a = 1, b = 2, sum;
sum = a + b;
console.log(`Here is the condition = ${sum <= 3 ? 'right' : 'wrong'} `);

let bill = prompt('Please Enter Bill: ');
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`Bill ${bill}, Tip's ${tip}, Total Cost: ${bill + tip}`);
*/

/*
console.log('Tip Calculator');
console.log('15% tip if the bill 30 to 300$ or if the bill is differet then tip will be 20%');
let start = 30, end = 300;
let bill = prompt('Please Enter Bill: ') ;
let value = bill <= end ? (bill * 0.15) : (bill * 0.2);
console.log(`Bill ${bill}, Tip ${value}`);
*/
/*
'use strict';

function display1() {
    console.log('My Name is Saad');
}

function display2() {
    console.log('I love JavaScript');
}

display1();
display2();
*/

/*
function fruitBlast(apple, mango){
    const fruit = `There are ${apple} apples & ${mango} mangos!!!`;
    console.log(fruit);
    return fruit;
}
fruitBlast(10, 5);

function readMe(text1, text2){
    const text = `Text 1 is: ${text1}, \nText 2 is ${text2}`;
    void text;
}
readMe('hello', 'hola')
*/

function outPut() {
    let person = prompt('Please enter your age:');
    if (person >= 18 && person <= 99) {
        document.getElementById('showText').innerHTML = 'Age ' + person + ': you are Adult' + '\n';
    } else if (person <= 18) {
        document.getElementById('showText').innerHTML = 'Age ' + person + ': you are Under Age' + '\n';
    } else if (person >= 100) {
        document.getElementById('showText').innerHTML = 'How you are not dead bruh!!!';
    } else if (person === ' ' && person === '') {
        document.getElementById('showText').innerHTML = 'You entered nothing';
    }
}

function trafficLight() {
    let traffic = prompt('Enter current traffic light: (red, yellow, green)');
    if (traffic === 'red') {
        document.getElementById('showText2').innerHTML = 'Stop the car right now!!!';
    } else if (traffic === 'yellow') {
        document.getElementById('showText2').innerHTML = 'Be ready for stop the car!!!';
    } else if (traffic === 'green') {
        document.getElementById('showText2').innerHTML = 'You can drive your car now!!!';
    } else if (traffic === ' ' && traffic === '') {
        document.getElementById('showText2').innerHTML = 'you enter nothing';
    } else {
        document.getElementById('showText2').innerHTML = 'Invalid traffic color!!!';
    }
}

let color = 'green';
switch (color) {
    case 'red' :
        console.log('Stop');
        break;
    case 'yellow' :
        console.log('Slow down');
        break;
    case 'green' :
        console.log('Go');
        break;
    default :
        console.log('Something went wrong!');
}

//let day = prompt('Enter day: {Monday(1), Tuesday(2), Wednesday(3), Thursday(4), Friday(5), Saturday(6), Sunday(7)}');
let day = 3;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day:');
}