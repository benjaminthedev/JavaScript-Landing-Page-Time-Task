
//Dom Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),

//Showing the time    
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()


    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 Hours Format
    hour = hour % 12 || 12;

    //Output
    time.innerHTML = `${hour}<span>:</span>`
}