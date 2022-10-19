"use strict"

// -----------change Msk time to User time--------------------------
const userTimeStr = String(new Date());
const userTimeZone = Number(userTimeStr.slice(userTimeStr.indexOf("GMT") + 3, userTimeStr.indexOf("GMT") + 6));
const userTimeZoneString = userTimeStr.slice(userTimeStr.indexOf("GMT"), userTimeStr.indexOf("GMT") + 6);
let arrayMskTimeAToB = [
    '18:00',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '21:00',
];
let arrayMskTimeBToA = [
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:35',
    '21:50',
    '21:55',
];

function changeTimeFromMskToUser(time) {
    let array = time.split(':');
    let hour = array[0];
    let hourGmt = hour - 3;
    let userHour = hourGmt + userTimeZone;
    let userMinute = array[1];
    return `${userHour}:${userMinute}`
}


let arrayUserTimeAtoB = arrayMskTimeAToB.map(function (item) {
    return changeTimeFromMskToUser(item);
});
let arrayUserTimeBtoA = arrayMskTimeBToA.map(function (item) {
    return changeTimeFromMskToUser(item);
});


// -----------add options to select--------------------------
let selectAToB = document.getElementById('time1');
let selectBToA = document.getElementById('time2');

function addOptionsToSelect(array, select, className) {
    for (let i = 0; i < array.length; i++) {
        let newOption = document.createElement("option");
        newOption.classList.add(className);
        newOption.value = array[i];
        newOption.innerHTML = array[i] + ` (${userTimeZoneString})`;
        select.append(newOption);
    }
}

addOptionsToSelect(arrayUserTimeAtoB, selectAToB, 'optionAToB');
addOptionsToSelect(arrayUserTimeBtoA, selectBToA, 'optionBToA');


// -----------add selects depending on the direction--------------------------
let form = document.getElementById('form');
let price;
let duration;

function addSelects() {
    if (form.direction.value == "A to B") {
        selectAToB.classList.add('active');
        selectBToA.classList.remove('active');
        price = 700;
        duration = '50 минут';
    } else if (form.direction.value == "B to A") {
        selectAToB.classList.remove('active');
        selectBToA.classList.add('active');
        price = 700;
        duration = '50 минут';
    } else if (form.direction.value == "A to B to A") {
        selectAToB.classList.add('active');
        selectBToA.classList.add('active');
        price = 1200;
        duration = '1 час 40 минут';
    }
}

form.direction.addEventListener('change', addSelects);


// -----------calculate all parameters--------------------------
let departureTime;
let arrivalTime;
let arrayOfOptions = document.getElementsByClassName("optionBToA");
let errorField = document.getElementById('error');
let errorMessage = ' ';

function calcArrivalTime(time, duration) {
    let array = time.split(':');
    let hours = Number(array[0]);
    let minutes = Number(array[1]) + duration;
    if (minutes > 119) {
        minutes -= 120;
        hours += 2;
    }
    if (minutes > 59) {
        minutes -= 60;
        hours += 1;
    }
    if (hours > 23) {
        hours -= 24;
    }
    if (hours < 10) {
        hours = '0' + String(hours);
    }
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }
    return `${hours}:${minutes}`
}

function changeTimeToNumber(time) {
    let array = time.split(':');
    return Number(array[0] + array[1]);
}

function changeDepartureTime() {
    if (form.direction.value == "A to B") {
        departureTime = form.time1.options[form.time1.selectedIndex].text;
        arrivalTime = calcArrivalTime(form.time1.options[form.time1.selectedIndex].value, 50) + ` (${userTimeZoneString})`;
    } else if (form.direction.value == "B to A") {
        departureTime = form.time2.options[form.time2.selectedIndex].text;
        arrivalTime = calcArrivalTime(form.time2.options[form.time2.selectedIndex].value, 50) + ` (${userTimeZoneString})`;
    } else if (form.direction.value == "A to B to A") {
        departureTime = form.time1.options[form.time1.selectedIndex].text;
        arrivalTime = calcArrivalTime(form.time2.options[form.time2.selectedIndex].value, 100) + ` (${userTimeZoneString})`;
        for (let i = 0; i < arrayOfOptions.length; i++) {
            if (changeTimeToNumber(arrayOfOptions[i].value) < changeTimeToNumber(calcArrivalTime(form.time1.options[form.time1.selectedIndex].value, 50))) {
                arrayOfOptions[i].setAttribute("disabled", "disabled");
            } else {
                arrayOfOptions[i].removeAttribute("disabled");
            }
        }
        if (changeTimeToNumber(calcArrivalTime(form.time1.options[form.time1.selectedIndex].value, 50)) > changeTimeToNumber(form.time2.options[form.time2.selectedIndex].value)) {
            form.time2.selectedIndex = 0;
        }
    }
}

form.time1.addEventListener('change', changeDepartureTime);
form.time2.addEventListener('change', changeDepartureTime);


function calculate(event) {
    event.preventDefault();
    if (form.direction.selectedIndex == 0) {
        errorMessage = 'Вы не выбрали направление!';
    } else if (((form.direction.selectedIndex == 1 || form.direction.selectedIndex == 3) && form.time1.selectedIndex == 0) || ((form.direction.selectedIndex == 2 || form.direction.selectedIndex == 3) && form.time2.selectedIndex == 0)) {
        errorMessage = 'Вы не выбрали время отправки!';
    } else if (!form.amount.value) {
        errorMessage = 'Вы не указали количество билетов!';
    } else if (form.amount.value <= 0 || form.amount.value > 30) {
        errorMessage = 'Введите корректное количество билетов!';
    } else {
        errorMessage = ' ';
    }
    errorField.innerHTML = errorMessage;
    if (errorMessage == ' ') {
        form.result.value = `Количество билетов: ${form.amount.value}\nМаршрут: ${form.direction.options[form.direction.selectedIndex].text}\nCтоимость: ${price * form.amount.value} ₽\nВремя отправления: ${departureTime}\nВремя прибытия: ${arrivalTime}\nВремя в пути: ${duration}`;
        form.result.style.backgroundColor = '#ffedac';
    }
}

form.addEventListener('submit', calculate);