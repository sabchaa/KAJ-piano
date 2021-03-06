var recorder;
playedNotes = [];

let ac = new AudioContext();
let dest = ac.createMediaStreamDestination();
for (let i = 0; i < notes.length; i++) {
    const a = document.getElementsByTagName("audio")[i];
    const source1 = ac.createMediaElementSource(a);
    source1.connect(ac.destination);
    source1.connect(dest);
}

recorder = new MediaRecorder(dest.stream);

async function startRecording() {
    startTime = Date.now();
    audioChunks = [];

    console.log("Recording started...")
    recorder.start();
}

recordBtn.addEventListener('click', ()=> {
    handleRecording();
})

function isRecording() {
    if (recordBtn != null && recordBtn.classList.contains('active')) {
        return true;
    }
    else {
        return false;
    }
}

function handleRecording() {
    recordBtn.classList.toggle('active');

    if (isRecording()) {
        startRecording();
    }
    else {
        stopRecording();
    }
}

function stopRecording() {
    recorder.stop();
    audioChunks = [];
    
    recorder.ondataavailable = function(e) {
        audioChunks.push(e.data);
        console.info("Finished recording. Got blob:", e.data);
    };

    recorder.onstop = function(e) {
        let blob = new Blob(audioChunks,{type:'audio/mp3'});
        let x = blob.duration;
        console.log(x);
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
    }

    console.log("Recording stopped...");

}