// Задание 1
let a = 10; 
alert(a);
a=20;
alert(a);

// Задание 2
const dateReleaseFirstiPhone = 2007;
alert(dateReleaseFirstiPhone)

// Задание 3
const creatorJS = "Брендан Эйх"
alert(creatorJS)

// Задание 4,5,6
let firstNumber = 10;
let secondNumber = 2;
let thirdNumber = 9;
let result = secondNumber**5;
alert(`сумма чисел = ${firstNumber+secondNumber}`)
alert(`произведение чисел = ${firstNumber*secondNumber}`)
alert(`разница чисел = ${firstNumber-secondNumber}`)
alert(`частное чисел = ${firstNumber/secondNumber}`)
alert(result)
alert(thirdNumber%secondNumber)

// Задание 7
let num = 1;
num+=5;
num-=3;
num*=7;
num/=3;
num++;
num--;
alert(num)

// Задание 8
let age =Number(prompt("Сколько вам лет?"))
alert(age)

// Задание 9
let user = {
    age: 33,
    name: 'Иван',
    isAdmin:true,
}
user['city of residence'] = true;
user.age = 36;
delete['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info]);

// Задание 10
const myName = prompt("Введите ваше имя")
alert(`Привет, ${myName}!`)





// Задание 1
let password = "covox";
let userPassword = prompt("Введите пароль");
console.log(userPassword === password ? "пароль верен" : "пароль неверен");

// Задание 2
let randomNumber = Number(prompt("Введите число от 0 до 10"));
(randomNumber>=0&&randomNumber<=10)?console.log("Верно"):console.log("Неверно");

// Задание 3
let d = Number(prompt("Введите число"));
let e = Number(prompt("Введите число"));
(d>100||e>100)?console.log("одно из чисел больше ста"):console.log("Ни одно из чисел не больше 100");

// Задание 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
console.log(a+b);

// Задание 5
let monthNumber = Number(prompt("Введите номер месяца"))
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log("Выбран зимний месяц")
    break;
    case 3:
    case 4:
    case 5:
        console.log("Выбран весенний месяц")
    break;
    case 6:
    case 7:
    case 8:
        console.log("Выбран летний месяц")
    break;
    case 9:
    case 10:
    case 11:
        console.log("Выбран осенний месяц")
    break;
    default:
        console.log("Введено некоректное значение")
        break;
}


// Задание 1
for (let i = 0; i < 2; i++) {
    console.log("привет");
    }

// Задание 2
for (let i = 1; i <=5; i++) {
    console.log(i);

}

// Задание 3
for (let i = 7; i <=22; i++) {
    console.log(i);

}

// Задание 4
let obj = {
    "коля": 200,
    "вася":300,
    "петя":400,
}
for (const name in obj) {
    console.log(`${name} зарплата ${obj[name]} доларов.`)
}

// Задание 5
let num = 0;
let n = 1000;
for (n; n > 50; n/=2) {
    num++;
}
console.log(`Количесттво делений ${num} итоговое число ${n} `);

// Задание 6
let firstFriday = Number(prompt("Введите дату первой пятници"));
let numberOfDayInMonth = Number(prompt("Введите количество дней в месяце"));
for (let dayMonth = firstFriday; dayMonth <= numberOfDayInMonth; dayMonth+=7) {
        console.log(`Сегодня пятница ${dayMonth}-е. Необходимо подготовить отчет.`)   
}




// Задание 1
let firstNum = Number(prompt("Введите первое число"));
let secondNum = Number(prompt("Введите второе число"));

const smallerOfTwoNumbers = (a, b) => {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}
console.log(smallerOfTwoNumbers(firstNum, secondNum));


// Задание 2
let userNum = Number(prompt("Введите число"));

const parityСheck = (number) => {
    if (number%2 === 0) {
        return "число четное";
    } else {
        return "число нечетное";
    }
}

console.log(parityСheck(userNum));


// Задание 3
const squareNumber = (number) => {
    return number*number;
}
const outputSquareNumber = (number) => {
    console.log(squareNumber(number));
}
outputSquareNumber(userNum);


// Задание 4
const userAge = () => {
    let age  = Number(prompt("Введите свой возраст"));
    if (age <= 0) {
        console.log("Введенo неправильное число")
    } else {
        (age > 0 && age < 13) ? alert("Привет, друг!"):alert("Добро пожаловать!");
    }
}
userAge();


// Задание 5
let firstNumber = prompt("Введите первое число");
let secondNumber = prompt("Введите второе число");
const correctnessCheck = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    } else {
        return a*b;
    }
}    
console.log(correctnessCheck(firstNumber, secondNumber));

// Задание 6
let userNumber = Number(prompt("Введите число"));
const cubeOfNumber = (n) => {
    isNaN(n)?console.log("Переданный параметр не является числом"):console.log(`${n} в кубе равняется ${n**3}`)
}
cubeOfNumber(userNumber);


// Задание 7
function getArea() {
    return 3.14*(this.radius**2);
}
function getPerimeter() {
    return 2*3.14*this.radius;
}
let circle1 = {
    radius: 14,
    area: getArea,
    perimeter: getPerimeter,
}
let circle2 = {
    radius: 6,
    area: getArea,
    perimeter: getPerimeter,
}
console.log(circle1.area());
console.log(circle2.area());
console.log(circle1.perimeter());
console.log(circle2.perimeter());



// Задание 1
console.log(" ---------Задание номер 1");
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) break;
};


// Задание 2
console.log(" ---------Задание номер 2");
console.log(numbs.indexOf(4));


// Задание 3
console.log(" ---------Задание номер 3");
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);


// Задание 4
console.log(" ---------Задание номер 4");
const arr = [];
for (let index = 0; index < 3; index++) {
    arr[index] = [];
    for (let idx = 0; idx < 3; idx++) {
        arr[index][idx] = 1;
    }
}
console.log(arr);


// Задание 5
console.log(" ---------Задание номер 5");
const num = [1, 1, 1];
for (let index = 0; index < 2; index++) {
    num.push(2);
}
console.log(num);


// Задание 6,7
console.log(" ---------Задание номер 6, 7");
let numStr = [9, 8, 7, 'a', 6, 5];
let del = numStr.indexOf("a");
numStr.splice(del, 1);
let userNumber = Number(prompt("Введите число от 1 до 10"));
(numStr.includes(userNumber)) ? console.log("данное число присутствует в данном массиве") : console.log("данного числа нет");
numStr = numStr.sort();
console.log(numStr);


// Задание 8
console.log(" ---------Задание номер 8");
const str = 'abcdef';
console.log(str.split('').reverse().join(''));


// Задание 9
console.log(" ---------Задание номер 9");
const twoDimArr = [[1, 2, 3,], [4, 5, 6]];
console.log(twoDimArr.splice(0, 1)[0].concat(twoDimArr[0]));


// Задание 10,11
console.log(" ---------Задание номер 10, 11");
let numeric = [];
for (let index = 0; index < 10; index++) {
    numeric[index] = getRandomInRange(1, 10);
}
console.log(numeric);
for (let index = 0; index < numeric.length; index++) {
    (index !== 9) ? console.log(`сумма элемента ${index} и элемента ${index + 1} = ${numeric[index] + numeric[index + 1]}`) : console.log(`элемент ${index} = ${numeric[index]}`);
}
const squareNumber = (arr) => {
    return arr = arr.map(value => (value * value));
}
console.log(squareNumber(numeric));


// Задание 12
console.log(" ---------Задание номер 12");
let word = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = (arr) => {
    return arr = arr.map(value => (value.length));
}
console.log(getLengthWords(word));


// Задание 13
console.log(" ---------Задание номер 13");
let randomNumber = [];
for (let index = 0; index < 10; index++) {
    randomNumber[index] = getRandomInRange(-10, 10);
}
console.log(randomNumber);
const negativeValue = (arr) => {
    return arr = arr.filter(value => value < 0);
}
console.log(negativeValue(randomNumber));


// Задание 14
console.log(" ---------Задание номер 14");
let randomNumb = [];
for (let index = 0; index < 10; index++) {
    randomNumb[index] = getRandomInRange(0, 10);
}
console.log(randomNumb);
console.log(randomNumb.filter(value => value % 2 === 0));


// Задание 15
console.log(" ---------Задание номер 15");
let randomNum = [];
for (let index = 0; index < 6; index++) {
    randomNum[index] = getRandomInRange(0, 10);
}
let sum = 0;
for (const number of randomNum) {
    sum += number;
}
console.log(randomNum);
console.log(` арифметическое = ${sum / randomNum.length}`);

