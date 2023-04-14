function timeYear() {
    let monthNumber = prompt("Введите номер месяца");
    if (isNaN(monthNumber)) {
        alert("Не числовое значение. Будьте внимательнее");
    } else {
        monthNumber = Number(monthNumber);

        if (monthNumber > 2 && monthNumber <= 5) {
            alert("Весна");
        } else {

            if (monthNumber > 5 && monthNumber <= 8) {
                alert("Лето");
            } else {
                if (monthNumber > 8 && monthNumber <= 11) {
                    alert("Осень");
                } else {
                    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
                        alert("Зима");
                    } else {
                        alert("Нет такоalertПопробуйте заново");
                    }
                }
            }
        }
    }

}

const gameWords = () => {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    mixWords = words.sort(() => Math.random() - 0.5);
    let message = "";
    for (const word of mixWords) {
            message += word + " ";
    }
    alert(message);
    let startWord = prompt("Чему равнялся первый элемент массива?").toLowerCase();
    let endWord = prompt("Чему равнялся последний элемент массива?").toLowerCase();
    if (startWord === mixWords[0].toLowerCase() && endWord === mixWords[mixWords.length - 1].toLowerCase()) {
        alert("Поздравляю вы угадали");
    } else {
        (startWord === mixWords[0].toLowerCase() || endWord === mixWords[mixWords.length - 1].toLowerCase()) ? alert("Вы были близки к победе!"):alert("Вы ответили неверно");
     
    }
}

