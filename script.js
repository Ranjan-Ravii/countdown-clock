
const inputTime = document.querySelector('.inputTime');
const startbtn = document.querySelector('.startbtn');

let countdownActive = false; // Flag to prevent multiple countdowns

function startCountdown(time) {

    if (countdownActive) return; // Prevent starting a new countdown if one is active

    countdownActive = true; // Set the flag to true to indicate a countdown is running

    let totalTime = time * 60;

    const countdownBox = document.querySelector('.countdown-box');
    countdownBox.innerHTML = ""; // Clear previous content

    const hrsBox = document.createElement('div');
    hrsBox.classList.add('timeContainer');
    const span1 = document.createElement('span');
    span1.classList.add('span');
    const minBox = document.createElement('div');
    minBox.classList.add('timeContainer');
    const span2 = document.createElement('span');
    span2.classList.add('span');
    const secBox = document.createElement('div');
    secBox.classList.add('timeContainer');

    countdownBox.appendChild(hrsBox);
    countdownBox.appendChild(span1);
    countdownBox.appendChild(minBox);
    countdownBox.appendChild(span2);
    countdownBox.appendChild(secBox);

    const countdownInterval = setInterval(() => {
        if (totalTime < 0) {
            clearInterval(countdownInterval);
            countdownActive = false; // Reset the flag when the countdown finishes

            hrsBox.innerHTML = "0";
            span1.innerHTML = ":";
            minBox.innerHTML = "0";
            span2.innerHTML = ":";
            secBox.innerHTML = "0";

            const finishedMessage = document.createElement('div');
            finishedMessage.classList.add('finishedMessage');
            finishedMessage.innerHTML = "Countdown finished!";
            document.body.appendChild(finishedMessage);

            // Remove the "Countdown finished!" message after 3 seconds
            setTimeout(() => {
                finishedMessage.remove();
            }, 2000);

            return;
        }

        let timeInHrous = Math.floor(totalTime / 3600);
        let remTime = totalTime % 3600;
        let timeInMin = Math.floor(remTime / 60);
        let timeInSec = remTime % 60;

        hrsBox.innerHTML = timeInHrous;
        span1.innerHTML = ":";
        minBox.innerHTML = timeInMin;
        span2.innerHTML = ":";
        secBox.innerHTML = timeInSec;

        totalTime--;

    }, 1000);
}

document.querySelector('.twoMin').addEventListener('click', function () {
    startCountdown(2); 
});

document.querySelector('.fiveMin').addEventListener('click', function () {
    startCountdown(5); 
});

document.querySelector('.fifteenMin').addEventListener('click', function () {
    startCountdown(15);
});

document.querySelector('.oneHrs').addEventListener('click', function () {
    startCountdown(60); 
});

startbtn.addEventListener('click', function() {
    const inputTimeValue = parseInt(inputTime.value); // Ensure input is converted to a number
    if (!isNaN(inputTimeValue) && inputTimeValue > 0) {
        startCountdown(inputTimeValue); // Start a countdown based on user input
        inputTime.value = "";
    } else {
        alert("Please enter a valid number of minutes.");
    }
});
