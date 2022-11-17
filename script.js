const startingMinutes = 5; 
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("startbtn");
let score = true;

// Butonul start 

function start() {
    if(time >= 0 && run == 1) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.textContent = `${minutes}:${seconds}`;
        time--;
            // Culoarea timer-ului cand este mai mic de 1 min
            if(time <= 60) {
                r.style.setProperty('--clock', '#E11D48');
            }
    } else if(score == true) { // Castigatorul 
        winner();
        score = false;
    } else{return}

}

// Blocarea butonului de start dupa ce este apasat si intervalul la cat timp sa se actualizeze functia start

startBtn.addEventListener('click', () => {
    setInterval(start, 1000);
    startBtn.disabled= true;
});

let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
var r = document.querySelector(':root');
let homeCounter = 0;
let guestCounter = 0;

// Blocul de butoane "+1" , "+2", "+3"

function scorehome1() {
    homeCounter += 1;
    if(homeCounter < 10) {
        homeScore.textContent = "0" + homeCounter;
    }else {
        homeScore.textContent = homeCounter;
    }
}

function scorehome2() {
    homeCounter += 2;
    if(homeCounter < 10) {
        homeScore.textContent = "0" + homeCounter;
    }else {
        homeScore.textContent = homeCounter;
    }
}

function scorehome3() {
    homeCounter += 3;
    if(homeCounter < 10) {
        homeScore.textContent = "0" + homeCounter;
    }else {
        homeScore.textContent = homeCounter;
    }
}

function scoreguest1() {
    guestCounter += 1;
    if(guestCounter < 10) {
        guestScore.textContent = "0" + guestCounter;
    }else {
        guestScore.textContent = guestCounter;
    }
}

function scoreguest2() {
    guestCounter += 2;
    if(guestCounter < 10) {
        guestScore.textContent = "0" + guestCounter;
    }else {
        guestScore.textContent = guestCounter;
    }
}

function scoreguest3() {
    guestCounter += 3;
    if(guestCounter < 10) {
        guestScore.textContent = "0" + guestCounter;
    }else {
        guestScore.textContent = guestCounter;
    }
}

// Schimbarea culorilor pentru puntele adunate

function color() {
    if(homeCounter > guestCounter) {
        r.style.setProperty('--home', '#03C04A');
        r.style.setProperty('--guest', '#E11D48');
    } else if(homeCounter < guestCounter){
        r.style.setProperty('--home', '#E11D48');
        r.style.setProperty('--guest', '#03C04A');
    } else {
        r.style.setProperty('--home', '#FA8128');
        r.style.setProperty('--guest', '#FA8128');
    }
}

// Functia ce anunta castigatorul ce este legata la functia start() cand se termina timpul

function winner() {
    if(homeCounter > guestCounter) {
        alert("The winner is HOME!");
    } else if(homeCounter < guestCounter){
        alert("The winner is GUEST!");
    } else {
        alert("Draw!");
    }
}

// Butonul reset

function reset() {
    time = startingMinutes * 60;
    countdownEl.textContent = "5:00";
    startBtn.disabled = false;
    homeCounter = 0;
    guestCounter = 0;
    homeScore.textContent = "00";
    guestScore.textContent = "00";
    color();
}