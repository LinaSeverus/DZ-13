'use strict';


function calcExpon(num1, num2) {

    if (typeof num1 === 'object' || num1 === '') return 'Ошибка! Вы не указали основное число!';

    if (typeof num2 === 'object' || num2 === '') {
        calcExpon(num1, num2 = 1);
    }

    if (isNaN(+num1) || isNaN(+num2)) {
        return 'Ошибка! Введено не число!';
    }

    return num1 ** num2;
}

const userMessage = calcExpon(prompt('Введите число'), prompt('В какую степень возвести первое число?'));
alert(userMessage);



