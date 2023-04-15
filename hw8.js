
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Задание 1
console.log("Задание 1");
const arrNumber = [];
for (let index = 0; index < 3; index++) {
    arrNumber[index] = getRandomInRange(0, 20);

}
console.log(arrNumber);
const arrSum = (array) => {
    let sum = 0;
    array.forEach(element => { sum += element; });
    return sum
}

const arrMult = (array) => {
    let mult = 1;
    array.forEach(element => { mult *= element; });
    return mult
}

const sumORmult = (array, callback) => { return callback(array); }
console.log(sumORmult(arrNumber, arrSum));
console.log(sumORmult(arrNumber, arrMult));
console.log("");


// Задание 2
console.log("Задание 2");
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
]
const temp = [...users];
console.log(temp);


const getSortedArrayObj = (array) => {
   return array.sort((a, b) => {return a.age - b.age;});
}
console.log(getSortedArrayObj(users));
console.log("");


// Задание 3
console.log("Задание 3");
const arr = [1, '4', false, 9, 'two'];
const reversArr = (array) => {
    return array.reverse();
}
const reductionToNumber = (array) => {
    // array.forEach(element => { 
    //     element = +element;
    // });
    for (let index = 0; index < array.length; index++) {
        array[index] = +array[index]
    }
    return array.filter(item => !isNaN(item));
    
}

const each = (array, calbacc) => {return calbacc(array);}
console.log(each(arr, reversArr));
console.log(each(arr, reductionToNumber));
console.log("");


// Задание 5
console.log("Задание 5");
function calling() {
    console.log('Звоню!')
};

function beeps(calback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        calback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
setTimeout(() => {console.log("")}, 1000)


// Задание 4
const date = () => {
    let currentDate = new Date;
    console.log(currentDate);
    const idInter =  setInterval(() => {console.log(currentDate);}, 3000)
    setTimeout(() => {clearInterval(idInter)}, 30000);
}
setTimeout(() => {console.log("Задание 4")}, 2000)
setTimeout(date, 2000);


