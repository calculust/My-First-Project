let favMovie = (movie = 'The Room', name = 'Tommy Wiseau') => console.log(`my favorite movie is ${movie} staring ${name}`);

let getFirstName = (fullName) => {
    console.log(fullName.split(' ')[0]);
}
let getFirstNameConcise = (fullName) => console.log(fullName.split(' ')[0]);

let doMath = (x,y) => {
    return {
        exponent: x**y,
        product: x*y
    }
}

favMovie();
favMovie('The Matrix','Keanu Reeves');

getFirstName('Chuck Norris');
getFirstNameConcise('Chuck Norris');

let results = doMath(2,3);
console.log(`Exponent result is ${results.exponent} and the product is ${results.product}`)

// Spread Syntax

let myFunc = (name, location, favFood) => {
    console.log(name, location, favFood);
}

let arr = ['Paul', 'Birmingham', 'Kimchi'];
myFunc(...arr);

