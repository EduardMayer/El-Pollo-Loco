/**
 * Represents the canvas element used for the game.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * Represents the game world.
 * @type {World}
 */
let world;

/**
 * Represents the keyboard input for the game.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Represents the flag for music playback.
 * @type {boolean}
 */
let isMusicPlaying = true;

/**
 * Represents the flag for fullscreen mode.
 * @type {boolean}
 */
let fullscreen = false;

/**
 * Represents the background music audio element.
 * @type {HTMLAudioElement}
 */
let bg_music = new Audio("/El-Pollo-Loco/audio/background_mexico.mp3");

// Set the background music volume to 0.1
bg_music.volume = 0.1;

/**
 * Initializes the game.
 */
function init() {
  // Hides the start screen
  document.getElementById("startScreen").classList.add("d-none");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bindBtsPressEvents();

  // Play the background music if music is enabled
  if (isMusicPlaying) {
    bg_music.play();
  }
}

/**
 * Restarts the game.
 */
function restartGame() {
  // Hide lose and win game containers and show the start screen
  document.getElementById('loseGameContainer').classList.remove("loseGameContainer");
  document.getElementById('winGameContainer').classList.remove("winGameContainer");
  document.getElementById('winGameContainer').classList.add("d-none");
  document.getElementById('loseGameContainer').classList.add("d-none");
  document.getElementById("startScreen").classList.remove("d-none");

  // Clear character and world intervals
  world.character.clearCharacterIntervals();
  world.clearWorldIntervals();
}

/**
 * Toggles the background music on/off.
 */
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

/**
 * Toggles the in-game background music on/off.
 */
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

/**
 * Opens the info container.
 */
function openInfoContainer() {
  let info = document.getElementById('infoContainer');
  info.classList.remove("d-none");
  info.classList.add("infoContainer");
}

/**
 * Closes the info container.
 */
function closeInfoContainer() {
  let closeIcon = document.getElementById('infoContainer');
  closeIcon.classList.add("d-none");
  closeIcon.classList.remove("infoContainer");
}

/**
 * Opens the button control layer.
 */
function openButtonLayer() {
  let layer = document.getElementById('controlInfoContainer');
  layer.classList.remove("d-none");
  layer.classList.add("controlInfoContainer");
}

/**
 * Closes the button control layer.
 */
function closeButtonLayer() {
  let layer = document.getElementById('controlInfoContainer');
  layer.classList.remove("controlInfoContainer");
  layer.classList.add("d-none");
}

/**
 * Opens fullscreen mode.
 */
function openFullscreen() {
  if (!fullscreen) {
    startFullscreen();
    toggleFullscreen()
    fullscreen = true;
  } else {
    closeFullscreen();
    toggleFullscreen()
    fullscreen = false;
  }
}

/**
 * Toggles fullscreen mode.
 */
function toggleFullscreen() {
  let backgroundImg = document.getElementById("backgroundImg");
  let losePicture = document.getElementById("losePicture");
  let winPicture = document.getElementById("winPicture");

  if (backgroundImg.classList.contains("backgroundImg")) {
    backgroundImg.classList.remove("backgroundImg");
    backgroundImg.classList.add("backgroundFullscreen");
    losePicture.classList.remove("losePicture");
    losePicture.classList.add("loseFullPicture");
    winPicture.classList.remove("winPicture");
    winPicture.classList.add("winFullPicture");
  } else {
    backgroundImg.classList.remove("backgroundFullscreen");
    backgroundImg.classList.add("backgroundImg");
    losePicture.classList.remove("loseFullPicture");
    losePicture.classList.add("losePicture");
    winPicture.classList.remove("winFullPicture");
    winPicture.classList.add("winPicture");
  }
}

/**
 * Requests to start fullscreen mode.
 */
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

/**
 * Requests to close fullscreen mode.
 */
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

/**
 * Handles fullscreen change events.
 */
function handleFullscreenChange() {
  if (!document.fullscreenElement) {
    toggleFullscreen();
    fullscreen = false;
  }
}
