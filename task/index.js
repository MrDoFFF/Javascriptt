const array = [1, 5, 7, 50, 9, 3, 12, 17]
// let evenNum = array.filter(num => num % 2 === 0);
// console.log(evenNum);

// let evenNum = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         evenNum.push(array[i]);
//     }
// }
// console.log(evenNum);

function murad(array, add) {
    let evenNum = [];
    for (let i = 0; i < array.length; i++) {
        if (add(array[i])) {
            evenNum.push(array[i])
        }
    }
    return evenNum;
}
function testEvenNum(number) {
    return number % 2 === 0;
}
// console.log(murad(array, x => x % 2 === 0));

function findNumber(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i]))
            return array[i]
    }
    return -1
}
// console.log(findNumber(array, a=>a>15));
function mapMethod(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(func(array[i]))
    }
    return newArr
}
// console.log(mapMethod(array, a => a * 10));

function someMethod(array, cb) {
    let res = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            res = true;
            break;
        }
    }
    cb(res)
}
someMethod(array, (result) => {
    // console.log(result);
})
function everyFunc(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (!cb(array[i])) {
            return false
        }
    }
    return true
}


// 26
// array.forEach((a, i) => a%2!==0 && console.log(i));
// 27
// array.forEach((a, i) => a%2===0 && console.log(i));
// 28
// array.forEach((a, i) => i%2!==0 && console.log(a));
// 29
// array.forEach((a, i) => i%2===0 && console.log(a));
// 30
// console.log(array.sort((a,b)=>b - a)[0]);
// 31
// console.log(array.sort((a,b)=>a - b)[0]);
// 32
function smallestevenelement(array) {
    const eventElement = array.filter(x => x % 2 === 0);
    return Math.min(...eventElement ); 
}

console.log("Ən kiçik cüt element:", smallestevenelement(array));
// 33
function enBoyukCutElement(array) {
    const cutElementler = array.filter(x => x % 2 === 0);
    return Math.max(...cutElementler);
}
console.log("Ən böyük cüt element:", enBoyukCutElement(array));



