
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Задание 1
console.log("js".toUpperCase());

// Задание 2
const paragraph = "Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять."
let arrStr = paragraph.split(' ');
console.log(arrStr);
let str = "мас"
const searchStr = (arr, str) => {
    return arr.filter(arr => arr.toLowerCase().startsWith(str.toLowerCase()));
}
console.log(searchStr(arrStr, str));

// Задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


// Задание 4
 console.log(Math.max(52, 53, 49, 77, 21, 32));
 console.log(Math.min(52, 53, 49, 77, 21, 32));
 let number  = [52, 53, 49, 77, 21, 32];
  console.log(Math.max.apply(null, number));
  console.log(Math.min.apply(null, number));


// Задание 5
console.log(getRandomInRange(1, 10));

// Задание 6
const arrNumbers = (num) => {
    let result = [];
    for (let index = 0; index < Math.floor(num / 2); index++) {
        result[index] = getRandomInRange(0, num);   
    }
    return result;
}
let userNumber = Number(prompt("Введите целое число"));
if (isNaN(userNumber)) {
    console.log("Введено не числовое значение");
} else {
    (Number.isInteger(userNumber)) ? console.log(arrNumbers(userNumber)): console.log("Число не целое");
}


// Задание 7
const randomNumber = (x, y) => {
    return result = getRandomInRange(x, y)
}
let firstNumber = Number(prompt("Введите первое целое число"));
let secondNumber = Number(prompt("Введите второе целое число"));
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Одно или два значения не являются числом");
} else {
    if (!(Number.isInteger(firstNumber) && Number.isInteger(secondNumber))) {
        console.log("Одно или оба числа не целые");
    } else {
        console.log(randomNumber(firstNumber, secondNumber));
    }
}


// Задание 8, 9
let currentDate = new Date();
console.log(currentDate);

currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10
const showDate = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    console.log(`Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}`);
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    console.log(`Время: ${date.getHours()}:${minute}:${second}`);
    let itemDate = {
        year: date.getDay(),
        months: date.getMonth(),
        dayMonths: date.getDate(),
        hours: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
    return itemDate;
}
let curDate = new Date();
showDate(curDate);

