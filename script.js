const startingMinutes = 5; 
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("startbtn");
const resetBtn = document.getElementById("resetbtn");
const addScoreBtn = document.getElementsByClassName("addscorebtn");
let score = true;
let interval
const homeScore = document.getElementById("homescore");
const guestScore = document.getElementById("guestscore");
countdownEl.textContent = `${startingMinutes}:00`;
homeScore.textContent = "00";
guestScore.textContent = "00";
for( let i = 0 ; i < addScoreBtn.length ; i++) {
    addScoreBtn[i].disabled = true;
    addScoreBtn[i].style.cursor = "default"
}

// Butonul start 

function start() {
    if(time >= 0) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.textContent = `${minutes}:${seconds}`;
        time--;
            // Culoarea timer-ului cand este mai mic de 1/2 min
            if(time <= 30) {
                r.style.setProperty('--clock', '#E11D48');
            }
    } else { // Castigatorul 
        winner();
        reset();
    }
}

// Blocarea butonului de start dupa ce este apasat si intervalul la cat timp sa se actualizeze functia start

startBtn.addEventListener('click', () => {
    interval = setInterval(start, 1000);
    startBtn.disabled= true;
    resetBtn.disabled = false;
    for( let i = 0 ; i < addScoreBtn.length ; i++) {
        addScoreBtn[i].disabled = false;
        addScoreBtn[i].style.cursor = "pointer"
    }
});


const r = document.querySelector(':root');
let homeCounter = 0;
let guestCounter = 0;

function maxScore() {
    alert("You can't add more points!")
}

// Blocul de butoane "+1" , "+2", "+3"

function scorehome1() {
    if(homeCounter < 999){
        homeCounter += 1;
        if(homeCounter < 10) {
            homeScore.textContent = "0" + homeCounter;
        }else {
            homeScore.textContent = homeCounter;
        }
    } else maxScore();
}

function scorehome2() {
    if(homeCounter < 998){
        homeCounter += 2;
        if(homeCounter < 10) {
            homeScore.textContent = "0" + homeCounter;
        }else {
            homeScore.textContent = homeCounter;
        }
    } else maxScore();
}

function scorehome3() {
    if(homeCounter < 997){
        homeCounter += 3;
        if(homeCounter < 10) {
            homeScore.textContent = "0" + homeCounter;
        }else {
            homeScore.textContent = homeCounter;
        }
    } else maxScore();
} 

function scoreguest1() {
    if(guestCounter < 999){
        guestCounter += 1;
        if(guestCounter < 10) {
            guestScore.textContent = "0" + guestCounter;
        }else {
            guestScore.textContent = guestCounter;
        }
    } else maxScore();
}

function scoreguest2() {
    if(guestCounter < 998){
        guestCounter += 2;
        if(guestCounter < 10) {
            guestScore.textContent = "0" + guestCounter;
        }else {
            guestScore.textContent = guestCounter;
        }
    } else maxScore();
}

function scoreguest3() {
    if(guestCounter < 997){
        guestCounter += 3;
        if(guestCounter < 10) {
            guestScore.textContent = "0" + guestCounter;
        }else {
            guestScore.textContent = guestCounter;
        }
    } else maxScore();
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
    countdownEl.textContent = `${startingMinutes}:00`;
    startBtn.disabled = false;
    winner();
    homeCounter = 0;
    guestCounter = 0;
    homeScore.textContent = "00";
    guestScore.textContent = "00";
    color();
    r.style.setProperty('--clock', '#DFFF00');
    clearInterval(interval);
    interval = 0;
    resetBtn.disabled = true;
    for( let i = 0 ; i < addScoreBtn.length ; i++) {
        addScoreBtn[i].disabled = true;
        addScoreBtn[i].style.cursor = "default"
    }
}