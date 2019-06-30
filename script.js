



// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAmPm = true;

//Showing the time    
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 Hours Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Backgrounds and messages
function setBackgroundGreeting() {
    let today = new Date(),
        hour = today.getHours();


    if (hour < 12) {
        //Morn
        document.body.style.backgroundImage = "";
        greeting.textContent = "Good Morning"
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "";
        greeting.textContent = "Good Afternoon"
    } else {
        //Evening
        document.body.style.backgroundImage = "";
        greeting.textContent = "Good Evening"
    }
}


// Run
showTime();
