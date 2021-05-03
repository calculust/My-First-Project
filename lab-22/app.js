/* slowMath.add(6, 2)
.then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.multiply(result, 2);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.divide(result, 4);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.subtract(result, 3);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.add(result, 98);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.remainder(result, 2);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.multiply(result, 50);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.remainder(result, 40);
}).then((result) => {
    console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
    return slowMath.add(result, 32);
}).then((result) => {
    console.log(`The final result is ${result}`);
}).catch((err) => {
    console.log(err);
}) */

async function doMath() {
    try {
        let result = await slowMath.add(6, 2);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.multiply(result, 2);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.divide(result, 4);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.subtract(result, 3);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.add(result, 98);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.remainder(result, 2);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.multiply(result, 50);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.remainder(result, 40);
        console.log(`%c${result}`, 'border:1px solid #fff; padding:5px');
        result = await slowMath.add(result, 32);
        console.log(`The final result is ${result}`);
    } catch (err) {
        console.log(err);
    }
}

doMath();