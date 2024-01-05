let countDownDate = new Date("Jan 9, 2024 09:00:00").getTime();

const x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("timer").innerHTML = days + " дней " + hours + " часов " + minutes +" минут "  + seconds + " cекунд ";
 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Время истекло";
    }
}, 1000);