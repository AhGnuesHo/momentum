const clock = document.getElementById("clock");
const today = document.getElementById("today");
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

function getClock(){
    const date = new Date();
    year = String( date.getFullYear());
    month = String( date.getMonth()+1);
    day = String( date.getDate());
    todayLabel = week[date.getDay()];

    today.innerText = (`${year}년 ${month}월 ${day}일 ${todayLabel} `);

    hour = String(date.getHours()).padStart(2,"0");
    miunte = String(date.getMinutes()).padStart(2,"0");
    seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = (`${hour} : ${miunte} : ${seconds} `);
}
getClock();
setInterval(getClock, 1000);