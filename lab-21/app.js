// Timing Out
function myFunction (msg) {
    console.log(msg);
}

/* myFunction('hi!');

setTimeout(() => {
    myFunction('hi again!');
}, 2000); */

function getWords() {
    console.log('instantly');

    setTimeout(() => {
        console.log('another word')
    }, 3000)

    setTimeout(() => {
        console.log('third word')
    }, 5000)

    setTimeout(() => {
        console.log('final word')
    }, 6000)
}

// getWords();

// Callbacks and Recursion
function done() {
    console.log(`Job's done!`);
}

function countdown(num, callback) {
    if (num) {
        setTimeout(() => { 
            console.log(num)
            countdown(num-1, callback);
        }, 1000);
    } else {
        return callback();
    }
}

// countdown(5, done);

// Promises Promises ;)
let lunchTime = false;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if(lunchTime) {
            let myObject = {
                lunch: 'chicken sandwich',
                drink: 'coke'
            }
            resolve(myObject);
        } else {
            let failed = new Error(`It's not lunchtime.`);
            reject(failed);
        }
    });
}

orderMeSomeFood()
.then((log) => {
    console.log(log);
})
.catch((err) => {
    console.log(err);
})

