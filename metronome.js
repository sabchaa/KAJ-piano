const tempo = document.querySelector('.tempo');
const decTempo = document.querySelector('.tempo-dec');
const incTempo = document.querySelector('.tempo-inc');
const slider = document.querySelector('.slider');
const triggerMetronome = document.querySelector('.metronome-trigger-btn');
const decBeats = document.querySelector('.beats-dec');
const incBeats = document.querySelector('.beats-inc');
const beatsCount = document.querySelector('.beats-count');

let bpm = 120;
let beats = 4;

decTempo.addEventListener('click', () => {
    if (bpm > 20) {
        bpm--;
        tempo.textContent = bpm;
        slider.value = bpm;
    }
});

incTempo.addEventListener('click', () => {
    if (bpm < 180) {
        bpm++;
        tempo.textContent = bpm;
        slider.value = bpm;
    }
});

slider.addEventListener('input', () => {
    bpm = slider.value;
    slider.value = bpm;
    tempo.textContent = bpm;
})

decBeats.addEventListener('click', () => {
    if(beats > 1) {
        beats--;
        beatsCount.textContent = beats;
    }
})

incBeats.addEventListener('click', () => {
    if(beats < 8) {
        beats++;
        beatsCount.textContent = beats;
    }
})

triggerMetronome.addEventListener('click', e => {
    if(e.target.textContent === "Start") {
        e.target.textContent = "Stop";
        start();
    }
    else {
        e.target.textContent = "Start";
        stop();
    }
})

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var timer;
var tickCount;
var running;
var currTime = 0.0;

//schedule ticks
function schedule() {
    while(currTime < context.currentTime + 0.1) {
        tick(currTime);
        updateTime();
    }
    timer = window.setTimeout(schedule, 0.1);
}

//calc time from bpm and update it
function updateTime() {
    currTempo = bpm;
    sPerBeat = 60 / currTempo;
    currTime += sPerBeat;
    tickCount++;
}

//generating tickSound and its frequency by the tickCount value
function tick(time) {
    var tickSound = context.createOscillator();
    const envelope = context.createGain();
    
    if (tickCount % beats == 0) {
        tickSound.frequency.value = 1000;
        tickCount = 0;
    }

    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
    envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
    tickSound.connect(envelope);
    envelope.connect(context.destination);

    tickSound.start(time);
    tickSound.stop(time + 0.03);
}


//start metronome
function start() {
    currTime = context.currentTime;
    tickCount = beats;
    schedule();
}

//stop metronome
function stop() {
    running = false;
    window.clearInterval(timer);
}
