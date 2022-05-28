const KEYS = ['z','s','x','d','c','v','g','b','h','n','j','m'];

const notes = document.querySelectorAll('.key')

const recordBtn = document.querySelector('.record-btn')

let startTime
let playedNotes

notes.forEach(key => {
    key.addEventListener('mousedown', e => {
        playNote(key)
        console.log(e.type);
        key.classList.add('active');
    })

    key.addEventListener('mouseup', e => {
        key.classList.remove('active');
    })
})

document.addEventListener('keydown', e => {
    if (e.repeat) {
        return;
    }

    const key = e.key;
    const keyIndex = KEYS.indexOf(key);
    
    if(keyIndex > -1) {
        playNote(notes[keyIndex], e);
        notes[keyIndex].classList.add('active');
    }
})

document.addEventListener('keyup', e => {
    const keyUp = e.key;
    const keyIndex = KEYS.indexOf(keyUp);
    if (keyIndex > -1) {
        notes[keyIndex].classList.remove('active');
    }
})

function playPreview() {
    Object.entries(playedNotes).forEach(note => {
        console.log(note[1].key);
        console.log(note[1].time);
        
        setTimeout(() => {
            playNote(note[1].key)
            console.log(note[1].key)

        }, note[1].time)
        console.log(note[1].key)
        setTimeout(() => {
            note[1].key.classList.remove('active')

        },  note[1].time + 200)
    })
}

function getNote(note) {
    playedNotes.push({
        key: note,
        time: Date.now() - startTime
    })
}

function playNote(key) {
    if (isRecording()) {
        getNote(key);
    }
    const noteSound = document.getElementById(key.dataset.note)
    noteSound.currentTime = 0;
    noteSound.play(); 
}


