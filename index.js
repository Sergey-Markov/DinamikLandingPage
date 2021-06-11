
// DOM elements
const time = document.getElementById('time'),
    name = document.getElementById('name'),
    greeting = document.getElementById('greeting'),
    focus = document.getElementById('focus');

// Show the time
function showTime (){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        seconds = today.getSeconds();
    
    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Set 12hr format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:<span>${addZero(min)}<span>:<span>${addZero(seconds)}`;

    setTimeout(showTime, 1000);
};

// Add Zero for time element
function addZero (timeElement){
    return (parseInt(timeElement, 10) < 10 ? '0' : "") + timeElement;
};

// Set Background and Greeting
function setBgGreet (){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // It's morning
        document.body.style.backgroundImage = "url('./src/image/morning.jpg')";
        greeting.textContent ='Good morning';
        document.body.style.backgroundSize = '100% 100%';
        document.body.style.backgroundPosition = '50% 50%';
        document.body.style.color = 'white';
    } else if(hour < 13){
        // It's diner
        document.body.style.backgroundImage = "url('./src/image/preparing-seafood-happy-european-chef-in-cook-uniform-rubber-gloves-holds-red-sea-bass-clenches-fist-with-joy.jpg')";
        greeting.textContent ='Bon Appetit';
        document.body.style.color = 'orange';
        document.body.style.backgroundSize = '100% 100%';
        document.body.style.backgroundPosition = '50% 50%';
        // Bon Appetit
    } else if(hour < 18){
        // It's afternoon
        
        document.body.style.backgroundImage = "url('./src/image/fishingAfternoon.jpg')";
        document.body.style.color = 'yellow';
        document.body.style.backgroundSize = '100% 100%';
        document.body.style.backgroundPosition = '50% 50%';
        greeting.textContent ='good afternoon';
    } else {
        // It's evening
        document.body.style.backgroundImage = "url('./src/image/fish-goodevening.jpg')";
        greeting.textContent ='good evening! Tell me your dreams...';
        document.body.style.color = 'black';
        document.body.style.backgroundSize = '100% 100%';
        document.body.style.backgroundPosition = '50% 50%';
    }
};

// RUN
showTime();
setBgGreet();