// // Задание 1
// let a = 10; 
// alert(a);
// a=20;
// alert(a);

// // Задание 2
// const dateReleaseFirstiPhone = 2007;
// alert(dateReleaseFirstiPhone)

// // Задание 3
// const creatorJS = "Брендан Эйх"
// alert(creatorJS)

// // Задание 4,5,6
// let firstNumber = 10;
// let secondNumber = 2;
// let thirdNumber = 9;
// let result = secondNumber**5;
// alert(`сумма чисел = ${firstNumber+secondNumber}`)
// alert(`произведение чисел = ${firstNumber*secondNumber}`)
// alert(`разница чисел = ${firstNumber-secondNumber}`)
// alert(`частное чисел = ${firstNumber/secondNumber}`)
// alert(result)
// alert(thirdNumber%secondNumber)

// // Задание 7
// let num = 1;
// num+=5;
// num-=3;
// num*=7;
// num/=3;
// num++;
// num--;
// alert(num)

// // Задание 8
// let age =Number(prompt("Сколько вам лет?"))
// alert(age)

// // Задание 9
// let user = {
//     age: 33,
//     name: 'Иван',
//     isAdmin:true,
// }
// user['city of residence'] = true;
// user.age = 36;
// delete['city of residence'];
// let info = prompt("Какую информацию хотите узнать о пользователе?")
// alert(user[info]);

// // Задание 10
// const myName = prompt("Введите ваше имя")
// alert(`Привет, ${myName}!`)





// // Задание 1
// let password = "covox";
// let userPassword = prompt("Введите пароль");
// console.log(userPassword === password ? "пароль верен" : "пароль неверен");

// // Задание 2
// let randomNumber = Number(prompt("Введите число от 0 до 10"));
// (randomNumber>=0&&randomNumber<=10)?console.log("Верно"):console.log("Неверно");

// // Задание 3
// let d = Number(prompt("Введите число"));
// let e = Number(prompt("Введите число"));
// (d>100||e>100)?console.log("одно из чисел больше ста"):console.log("Ни одно из чисел не больше 100");

// // Задание 4
// let a = '2';
// let b = '3';
// a = Number(a);
// b = Number(b);
// console.log(a+b);

// // Задание 5
// let monthNumber = Number(prompt("Введите номер месяца"))
// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Выбран зимний месяц")
//     break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Выбран весенний месяц")
//     break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Выбран летний месяц")
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Выбран осенний месяц")
//     break;
//     default:
//         console.log("Введено некоректное значение")
//         break;
// }


// // Задание 1
// for (let i = 0; i < 2; i++) {
//     console.log("привет");
//     }

// // Задание 2
// for (let i = 1; i <=5; i++) {
//     console.log(i);
    
// }

// // Задание 3
// for (let i = 7; i <=22; i++) {
//     console.log(i);
    
// }

// // Задание 4
// let obj = {
//     "коля": 200,
//     "вася":300,
//     "петя":400,
// }
// for (const name in obj) {
//     console.log(`${name} зарплата ${obj[name]} доларов.`)
// }

// // Задание 5
// let num = 0;
// let n = 1000;
// for (n; n > 50; n/=2) {
//     num++;
// }
// console.log(`Количесттво делений ${num} итоговое число ${n} `);

// // Задание 6
// let firstFriday = Number(prompt("Введите дату первой пятници"));
// let numberOfDayInMonth = Number(prompt("Введите количество дней в месяце"));
// for (let dayMonth = firstFriday; dayMonth <= numberOfDayInMonth; dayMonth+=7) {
//         console.log(`Сегодня пятница ${dayMonth}-е. Необходимо подготовить отчет.`)   
// }




// // Задание 1
// let firstNum = Number(prompt("Введите первое число"));
// let secondNum = Number(prompt("Введите второе число"));

// const smallerOfTwoNumbers = (a, b) => {
//     if (a <= b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(smallerOfTwoNumbers(firstNum, secondNum));


// // Задание 2
// let userNum = Number(prompt("Введите число"));

// const parityСheck = (number) => {
//     if (number%2 === 0) {
//         return "число четное";
//     } else {
//         return "число нечетное";
//     }
// }

// console.log(parityСheck(userNum));


// // Задание 3
// const squareNumber = (number) => {
//     return number*number;
// }
// const outputSquareNumber = (number) => {
//     console.log(squareNumber(number));
// }
// outputSquareNumber(userNum);


// // Задание 4
// const userAge = () => {
//     let age  = Number(prompt("Введите свой возраст"));
//     if (age <= 0) {
//         console.log("Введенo неправильное число")
//     } else {
//         (age > 0 && age < 13) ? console.log("Привет, друг!"):console.log("Добро пожаловать!");
//     }
// }
// userAge();


// // Задание 5
// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");
// const correctnessCheck = (a, b) => {
//     if (isNaN(a) || isNaN(b)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a*b;
//     }
// }    
// console.log(correctnessCheck(firstNumber, secondNumber));

// // Задание 6
// let userNumber = Number(prompt("Введите число"));
// const cubeOfNumber = (n) => {
//     isNaN(n)?console.log("Переданный параметр не является числом"):console.log(`${n} в кубе равняется ${n**3}`)
// }
// cubeOfNumber(userNumber);


// // Задание 7
// function getArea() {
//     return 3.14*(this.radius**2);
// }
// function getPerimeter() {
//     return 2*3.14*this.radius;
// }
// let circle1 = {
//     radius: 14,
//     area: getArea,
//     perimeter: getPerimeter,
// }
// let circle2 = {
//     radius: 6,
//     area: getArea,
//     perimeter: getPerimeter,
// }
// console.log(circle1.area());
// console.log(circle2.area());
// console.log(circle1.perimeter());
// console.log(circle2.perimeter());