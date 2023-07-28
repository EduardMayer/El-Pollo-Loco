let canvas;
let world;
let keyboard = new Keyboard();
let isMusicPlaying = true;
let fullscreen = false;
let bg_music = new Audio("/El-Pollo-Loco/audio/background_mexico.mp3");
bg_music.volume = 0.1; // Musiklautsärke 0 gerade

function init() {
  document.getElementById("startScreen").classList.add("d-none");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bindBtsPressEvents();
  
  if (isMusicPlaying) {
    bg_music.play();
  }
 
}

function restartGame() {
  document.getElementById('loseGameContainer').classList.remove("loseGameContainer");
  document.getElementById('winGameContainer').classList.remove("winGameContainer");
  document.getElementById('winGameContainer').classList.add("d-none");
  document.getElementById('loseGameContainer').classList.add("d-none");
  document.location.reload();
}

function volumeONOFF() {
  let image = document.getElementById("volume");

  if (!isMusicPlaying) {
    image.src = "/El-Pollo-Loco/icons/volume-up.png";
    isMusicPlaying = true;
    
  } else {
    image.src = "/El-Pollo-Loco/icons/volume-mute.png";
    isMusicPlaying = false;
    
  }
}

function ingameVolumeONOFF() {
  let image = document.getElementById("ingameVolume");

  if (!isMusicPlaying) {
    image.src = "/El-Pollo-Loco/icons/volume-up.png";
    isMusicPlaying = true;
    bg_music.play();
    
  } else {
    image.src = "/El-Pollo-Loco/icons/volume-mute.png";
    isMusicPlaying = false;
    bg_music.pause();
    
  }
}

function openInfoContainer(){
  let info = document.getElementById('infoContainer');
  info.classList.remove("d-none");
  info.classList.add("infoContainer");
}

function closeInfoContainer(){
  let closeIcon = document.getElementById('infoContainer');
  closeIcon.classList.add("d-none");
  closeIcon.classList.remove("infoContainer");
  
}

function openButtonLayer(){
  let layer = document.getElementById('controlInfoContainer');
  layer.classList.remove("d-none");
  layer.classList.add("controlInfoContainer");
}

function closeButtonLayer(){
  let layer = document.getElementById('controlInfoContainer');
  layer.classList.remove("controlInfoContainer");
  layer.classList.add("d-none");
  
}

function openFullscreen() {
  if (!fullscreen) {
    startFullscreen();
    changeToFullscreen();
    fullscreen = true;
  } else {
    closeFullscreen();
    changeToStandartscreen();
    fullscreen = false;
  }
}

function changeToFullscreen() {
  let backgroundImg = document.getElementById("backgroundImg");
  let losePicture = document.getElementById("losePicture");
  let winPicture = document.getElementById("winPicture");
  backgroundImg.classList.remove("backgroundImg");
  backgroundImg.classList.add("backgroundFullscreen");
  losePicture.classList.remove("losePicture");
  losePicture.classList.add("loseFullPicture");
  winPicture.classList.remove("winPicture");
  winPicture.classList.add("winFullPicture");
}

function changeToStandartscreen() {
  let backgroundImg = document.getElementById("backgroundImg");
  let losePicture = document.getElementById("losePicture");
  let winPicture = document.getElementById("winPicture");
  backgroundImg.classList.remove("backgroundFullscreen");
  backgroundImg.classList.add("backgroundImg");
  losePicture.classList.remove("loseFullPicture");
  losePicture.classList.add("losePicture");
  winPicture.classList.remove("winPicture");
  winPicture.classList.add("winFullPicture");
}

function startFullscreen() {
  let elem = document.getElementById("mainContainer");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }

  document.addEventListener("fullscreenchange", handleFullscreenChange);
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  document.removeEventListener("fullscreenchange", handleFullscreenChange);
}

function handleFullscreenChange() {
  if (!document.fullscreenElement) {
    changeToStandartscreen();
    fullscreen = false;
  }
}

