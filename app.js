const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 2;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (( hours + ( mins / 60 ) + ( seconds / 3600 ) ) / 12 * 360) + 5
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    

    if(seconds == 0) {
        secondsHand.style.transitionDuration = '0s';
        minsHand.style.transitionDuration = '0s';
        hoursHand.style.transitionDuration = '0s';
       } else {
        secondsHand.style.transitionDuration = '0.05s';
        minsHand.style.transitionDuration = '0.05s';
        hoursHand.style.transitionDuration = '0.05s';
    }
}

setInterval(setDate, 1000);