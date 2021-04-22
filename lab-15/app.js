let fruits = ['Apple','Banana','Pear'];

function firstFruit() {
    let favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavoriteFruit() {
        let leastFav = fruits[2];
        console.log(favFruit);
    }
    // console.log(leastFav);
    printFavoriteFruit();
}
firstFruit();

someFunc();
function someFunc() {
    console.log('Hello Vishal');
};

// testFunc(); Doesn't Work
let testFunc = function() {
    alert('hi');
}
testFunc(); // Works