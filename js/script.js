"use strict"

// -----------add selects depending on the direction--------------------------
let form = document.getElementById('form');
let timeAtoB = document.getElementById('form__time_1');
let timeBtoA = document.getElementById('form__time_2');
let price;
let duration;

function addSelects() {
    if (form.direction.value == "A to B") {
        timeAtoB.classList.add('active');
        timeBtoA.classList.remove('active');
        price = 700;
        duration = '50 минут';
    } else if (form.direction.value == "B to A") {
        timeAtoB.classList.remove('active');
        timeBtoA.classList.add('active');
        price = 700;
        duration = '50 минут';
    } else if (form.direction.value == "A to B to A") {
        timeAtoB.classList.add('active');
        timeBtoA.classList.add('active');
        price = 1200;
        duration = '1 час 40 минут';
    }
}

form.direction.addEventListener('change', addSelects);


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

function changeTimeFromMskToUser (time) {
    let array = time.split(':');
    let hour = array[0];
    let hourGmt = hour - 3;
    let userHour = hourGmt + userTimeZone;
    let userMinute = array[1];
    return `${userHour}:${userMinute}`
}


let arrayUserTimeAtoB = arrayMskTimeAToB.map(function(item){
    return changeTimeFromMskToUser(item);
});
let arrayUserTimeBtoA = arrayMskTimeBToA.map(function(item){
    return changeTimeFromMskToUser(item);
});


// -----------add options to select--------------------------
let selectAToB = document.getElementById('time1');
let selectBToA = document.getElementById('time2');

function addOptionsToSelect (array, select) {
    for (let i = 0; i < array.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = array[i];
        newOption.innerHTML = array[i] + ` (${userTimeZoneString})`;
        select.append(newOption);
    }
}

addOptionsToSelect (arrayUserTimeAtoB, selectAToB);
addOptionsToSelect (arrayUserTimeBtoA, selectBToA);


// -----------calculate all--------------------------
form.addEventListener('submit', calculate);

function calculate(event) {
    event.preventDefault();
    form.result.value = `Количество билетов: ${form.amount.value}\nМаршрут: ${form.direction.options[form.direction.selectedIndex].text}\nCтоимость: ${price} ₽`;
    // Время отправления: 
    // Время прибытия:
    // Время в пути: 
}