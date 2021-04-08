let name = 'Vishal'; /* My Name */
const states = 50; /* Number of states in the USA */
let fivePlusFour = 5 + 4; /* Example of addition */

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables = ['Sweet Potato','Potato','Carrot','Cucumber','Water Chestnut'];

for (i = 0; i < vegetables.length; ++i) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'Yoda',
    breed: 'Bengal'
}
console.log(pet);

let person1 = {
    name: 'Bob',
    age: 22
}
let person2 = {
    name: 'Samantha',
    age: 18
}
let person3 = {
    name: 'Stuart',
    age: 32
}
let person4 = {
    name: 'Kush',
    age: 45
}
let person5 = {
    name: 'Sandeep',
    age: 17
}

let people = [person1, person2, person3, person4, person5];

for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength (phrase) {
    return phrase.length;
}

let hwLength = getLength('Hello World');
if (hwLength % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}