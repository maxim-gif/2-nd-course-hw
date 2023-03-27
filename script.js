// // Задание 1
// let a = 10; 
// alert(a);
// a=20;
// alert(a);

// // Задание 2
// const datePhone = 2007;
// alert(datePhone)

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
// (userPassword === password) ? console.log("пароль верен") : console.log("пароль неверен");

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