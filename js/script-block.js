"use strict"

let infoBlock = document.getElementById('advantage');
let infoBlockWidth = infoBlock.offsetWidth;
// console.log(infoBlock);
// console.log(infoBlockWidth);

let timeBlock = document.getElementById('timeblock');
let timeBlockWidth = timeBlock.offsetWidth;
// console.log(timeBlock);
console.log(timeBlockWidth);

// --------------------------------------------------------------------------
let timeBlockWidth1 = 347; // получаем автоматически длину блока timeblock

let oneStep = 64 + 7; // получаем автоматически длину time + gap
let remainder = timeBlockWidth1; // разница (изначально приравниваем к длине блока)
let counter; // создаём счётчик

for (let i = 1; i < 100; i++) {
    remainder -= oneStep; // каждый раз вычитаем из разницы шаг
    if (remainder < oneStep - 7) { // если разница станет меньше чем шаг - gap
        counter = i; // обновляем счётчик
        break; // завершаем
    }
}

// получаем количество элементов time

// получаем массив всех элементов time

// если счетчик == количество time то ок

// если меньше
// включаем элемент ЕЩЁ
// перебираем for массив элементов time 
// если i больше счетчика, добавляем элементу display = "none"

let test = document.querySelectorAll(".info__time")[3];
test.style.display = "none";

// вешаем на элемент ЕЩЁ обработчик click
// при нажатии элемент ЕЩЁ выключаем, все остальные элементы включаем