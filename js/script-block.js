"use strict"

let timeBlock = document.querySelector(".info__timesblock");
let timeBlockWidth = timeBlock.offsetWidth;
let timeWidth = document.querySelector(".info__time").offsetWidth;
let timeBlockStyles = window.getComputedStyle(timeBlock);
let gap = parseInt(timeBlockStyles.gap);
let oneStep = timeWidth + gap;
let remainder = timeBlockWidth;
let capacity;
let arrayTimeBlock = document.querySelectorAll(".info__timesblock");

for (let i = 1; i < 100; i++) {
    remainder -= oneStep;
    if (remainder < oneStep - gap) {
        capacity = i;
        break;
    }
}

function hideAndOpenAllTimes(timeBlock) {
    let arrayTime = timeBlock.querySelectorAll(".info__time");
    let arrayTimeLength = arrayTime.length;
    let moreBtn = timeBlock.querySelector(".info__more");
    let closeBtn = timeBlock.querySelector(".info__close");

    function hideTimes() {
        moreBtn.classList.remove('displaynone');
        closeBtn.classList.add('displaynone');
        for (let i = 1; i < arrayTimeLength; i++) {
            if (i >= capacity - 1) {
                arrayTime[i].classList.add('displaynone');
            }
        }
    }
    function openTimes() {
        moreBtn.classList.add('displaynone');
        closeBtn.classList.remove('displaynone');
        for (let i = 0; i < arrayTimeLength; i++) {
            if (arrayTime[i].classList.contains('displaynone')) {
                arrayTime[i].classList.remove('displaynone');
            }
        }
    }

    if (capacity < arrayTimeLength) {
        hideTimes();
    }
    
    moreBtn.addEventListener('click', function () {
        openTimes();
    });
    closeBtn.addEventListener('click', function () {
        hideTimes();
    });
}

for (let i = 0; i < arrayTimeBlock.length; i++) {
    hideAndOpenAllTimes(arrayTimeBlock[i]);
}