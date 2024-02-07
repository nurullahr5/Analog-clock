const numberHours = document.getElementById('number-hours')
const barSecond = document.getElementById('bar-second')

const numberElement = []
const barElement = []

// create number of hours
for (let i = 1; i <= 12; i++) {
        let span = document.getElementById('span');
        span.style.setProperty('--index', i);
        
        let p = document.getElementById('p');
        p.textContent = i;
    numberElement.push(span.outerHTML)
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""))


// create bar seconds
for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i}"><p></p></span>`
    )
}
barSecond.insertAdjacentHTML("afterbegin", barElement.join(""))
console.log(barElement);

const handHour = document.getElementById('hand-hour')
const handMinute = document.getElementById('hand-minute')
const handSecond = document.getElementById('hand-second')

function getCurrentTime() {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    handHour.style.transform = `rotate(${currentHour * 30 + currentMinute/2}deg)`;
    handMinute.style.transform = `rotate(${currentMinute * 6}deg)`;
    handSecond.style.transform = `rotate(${currentSecond * 6}deg)`;
}
getCurrentTime()
setInterval(getCurrentTime, 1000)