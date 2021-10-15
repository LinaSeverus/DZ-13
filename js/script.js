'use strict';


function calcExpon(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return alert('Ошибка! Введено не число!');
    }

    if (typeof num2 === 'object' || num2 === '') {
        calcExpon(num1, num2 = 1);
    }
    return num1 ** num2;

}

const userMessage = calcExpon(+prompt('Введите число'), prompt('В какую степень возвести первое число?'));
alert(userMessage);

