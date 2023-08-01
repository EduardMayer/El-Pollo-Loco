/**
 * Represents a virtual keyboard for game controls.
 * @class Keyboard
 */
class Keyboard {
  /**
   * Flag indicating whether the left arrow key is pressed.
   * @type {boolean}
   */
  LEFT = false;

  /**
   * Flag indicating whether the right arrow key is pressed.
   * @type {boolean}
   */
  RIGHT = false;

  /**
   * Flag indicating whether the up arrow key is pressed.
   * @type {boolean}
   */
  UP = false;

  /**
   * Flag indicating whether the down arrow key is pressed.
   * @type {boolean}
   */
  DOWN = false;

  /**
   * Flag indicating whether the space key is pressed.
   * @type {boolean}
   */
  SPACE = false;

  /**
   * Flag indicating whether the 'd' key is pressed.
   * @type {boolean}
   */
  D = false;
}

/**
 * Event listener for keyboard keydown events.
 */
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    keyboard.UP = true;
  }

  if (event.key === "ArrowDown") {
    keyboard.DOWN = true;
  }

  if (event.key === "ArrowLeft") {
    keyboard.LEFT = true;
  }

  if (event.key === "ArrowRight") {
    keyboard.RIGHT = true;
  }

  if (event.key === " ") {
    keyboard.SPACE = true;
  }

  if (event.key === "d") {
    keyboard.D = true;
  }
});

/**
 * Event listener for keyboard keyup events.
 */
window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp") {
    keyboard.UP = false;
  }

  if (event.key === "ArrowDown") {
    keyboard.DOWN = false;
  }

  if (event.key === "ArrowLeft") {
    keyboard.LEFT = false;
  }

  if (event.key === "ArrowRight") {
    keyboard.RIGHT = false;
  }

  if (event.key === " ") {
    keyboard.SPACE = false;
  }

  if (event.key === "d") {
    keyboard.D = false;
  }
});

/**
 * Bind touch press events to control game movements.
 */
function bindBtsPressEvents() {
  document.getElementById("moveLeftBtn").addEventListener("touchstart", (event) => {
    event.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("moveLeftBtn").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("moveRightBtn").addEventListener("touchstart", (event) => {
    event.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("moveRightBtn").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("jumpBtn").addEventListener("touchstart", (event) => {
    event.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("jumpBtn").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById("throwBtn").addEventListener("touchstart", (event) => {
    event.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("throwBtn").addEventListener("touchend", (event) => {
    event.preventDefault();
    keyboard.D = false;
  });
}
