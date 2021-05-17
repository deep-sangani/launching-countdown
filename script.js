let sec = 00;
let min = 02;
let hours = 00;
let days = 00;

var days_card = document.getElementById("days")
var hours_card = document.getElementById("hours")
var minutes_card = document.getElementById("minutes")
var seconds_card = document.getElementById("seconds")

function gettime () {
    var inid = setInterval(() => {
        if (sec <= 0) {
            if (min > 0) {
                min--;
                sec = 60;
            } else if (hours > 0) {
                hours--;
                min = 60;
                sec = 60;
            } else if (days > 0) {
                days--;
                hours =60;
                min = 60;
                sec = 60;

            }
            return;
        }
        sec--;
        seconds_card.innerText = sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        minutes_card.innerText = min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        hours_card.innerText = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        days_card.innerText = days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
     
    }, 1000)

}

gettime();
