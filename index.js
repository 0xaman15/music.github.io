let progress = document.getElementById("progress");
let song = document.getElementById("song");
let conTRol = document.getElementById("conTRol");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(conTRol.classList.contains("bi-pause-fill")){
        song.pause();
        conTRol.classList.remove("bi-pause-fill");
        conTRol.classList.add("bi-play-fill");
    }
    else{
        song.play();
        conTRol.classList.add("bi-pause-fill");
        conTRol.classList.remove("bi-play-fill");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    conTRol.classList.add("bi-pause-fill");
    conTRol.classList.remove("bi-play-fill")
}