// Задание 1
let a = 10; 
alert(a);
a=20;
alert(a);

// Задание 2
const datePhone = 2007;
alert(datePhone)

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