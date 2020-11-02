let fillbar = document.querySelector(".fill");
let audios = ["Audio_One.mp3", "Audio_Two.mp3", "Audio_Three.mp3"];
let covers = ["cover1.jpg", "cover2.jpg", "cover3.jpg"];
let volumeDown = [
  "fas fa-volume-up",
  "fas fa-volume-down",
  "fas fa-volume-off",
];

let volume = document.querySelector("#volume");
let currentTime = document.querySelector(".time");
let titre = document.getElementById("titre");
// Create An Object Of Audio

//let audio = new Audio();
let audio = document.querySelector("#son");
let currentSong = 0;
// image
let image = document.querySelector("#image");
// whenever the window load, song should play automaticly

window.onload = playSong;

// let's play the song by this function whenever window load

function playSong() {
  audio.src = audios[currentSong];
  image.src = covers[currentSong];
  titre.innerHTML = audios[currentSong];

  audio.play();
}
if (audio.play()) {
  //fillbar.style.background = "#fff";
  console.log("bbbbbb");
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    fillbar.style.background = "#fff";
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}
/**
 * volume down
 */
function decreaseVolume() {
  if (audio.volume != 1.3877787807814457e-16) {
    audio.volume -= 0.1;
    if (audio.volume == 0.6000000000000001) {
      volume.className = volumeDown[1];
    } else if (audio.volume == 1.3877787807814457e-16) {
      volume.className = volumeDown[2];
    }
  }
}
/**
 * volume up
 */
function increaseVolume() {
  if (audio.volume < 1) {
    audio.volume += 0.1;
    if (audio.volume == 0.10000000000000014) {
      volume.className = volumeDown[2];
    } else if (audio.volume == 0.5000000000000001) {
      volume.className = volumeDown[1];
    } else if (audio.volume == 1) {
      volume.className = volumeDown[0];
    }
  }
}

/**
 * next sound
 */
function nextAudio() {
  if (currentSong < audios.length - 1) {
    audio.src = audios[(currentSong += 1)];
    image.src = covers[currentSong];
    titre.innerHTML = audios[currentSong];
    audio.play();
  }
}

/**
 * previous sound
 */
function prevAudio() {
  if (currentSong != 0) {
    audio.src = audios[(currentSong -= 1)];
    image.src = covers[currentSong];
    titre.innerHTML = audios[currentSong];
    audio.play();
  }
}

// Now let's make dynamic the fillbar

audio.addEventListener("timeupdate", function () {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";
});
