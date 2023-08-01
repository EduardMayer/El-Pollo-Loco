/**
 * Represents a movable object in the game, extending a drawable object.
 * @class MovebalObject
 * @extends DrawableObject
 */
class MovebalObject extends DrawableObject {
  /**
  * The horizontal speed of the movable object.
  * @type {number}
  * @default 0.2
  */
  speed = 0.2;

  /**
   * Indicates whether the movable object is facing the opposite direction.
   * @type {boolean}
   * @default false
   */
  otherDirection = false;

  /**
   * The vertical speed of the movable object (used for jumping and gravity).
   * @type {number}
   * @default 0
   */
  speedY = 0;

  /**
   * The acceleration value used for applying gravity to the movable object.
   * @type {number}
   * @default 2.5
   */
  acceleration = 2.5;

  /**
   * The offset values for collision detection (used for fine-tuning).
   * @type {{ x: number, y: number, width: number, height: number }}
   * @default { x: 0, y: 0, width: 0, height: 0 }
   */
  offset = { x: 0, y: 0, width: 0, height: 0 };

  /**
   * The time in milliseconds since the last hit on the movable object.
   * @type {number}
   * @default 0
   */
  lastHit = 0;

  /**
   * The number of coins collected by the movable object.
   * @type {number}
   * @default 0
   */
  coin = 0;

  /**
   * The number of bottles collected by the movable object.
   * @type {number}
   * @default 0
   */
  bottle = 0;

  /**
   * An array of intervals used for character animations.
   * @type {Array<number>}
   * @default []
   */
  characterIntervals = [];
  /**
     * Apply gravity to the movable object.
     * @memberof MovebalObject
     */
  applyGravity() {
    this.gravityInterval = setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else {
        this.speedY = 0;
        this.y = 185;
      }
    }, 1000 / 30);
  }

  /**
   * Stop the gravity interval for the movable object.
   * @memberof MovebalObject
   */
  stopGravityInterval() {
    clearInterval(this.gravityInterval);
  }

  /**
   * Handle the game state when the player loses the game.
   * @memberof MovebalObject
   */
  loseTheGame() {
    this.stopGravityInterval();
    this.fallDown();
    bg_music.pause();
    document.getElementById("loseGameContainer").classList.remove("d-none");
    document.getElementById("loseGameContainer").classList.add("loseGameContainer");
  }

  /**
   * Handle the game state when the player wins the game.
   * @memberof MovebalObject
   */
  winTheGame() {
    this.fallDown();
    bg_music.pause();
    document.getElementById("winGameContainer").classList.remove("d-none");
    document.getElementById("winGameContainer").classList.add("winGameContainer");
    this.win_game_sound.play();
  }

  /**
   * Make the movable object fall down.
   * @memberof MovebalObject
   */
  fallDown() {
    setInterval(() => {
      this.speed = 0;
      this.y += 15;
    }, 100);
  }

  /**
   * Check if the movable object is above the ground.
   * @memberof MovebalObject
   * @returns {boolean} True if the object is above the ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 185;
    }
  }

  /**
   * Mirror the image of the movable object.
   * @memberof MovebalObject
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   */
  mirrorImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }
  /**
   * Restore the mirrored image of the movable object.
   * @memberof MovebalObject
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   */
  restoreImage(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }
  /**
     * Play the animation of the movable object using a set of images.
     * @memberof MovebalObject
     * @param {Array<string>} images - An array of image paths for the animation.
     */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
 * Move the character to the right.
 * @memberof MovebalObject
 */
  characterMoveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.walking_sound.play();
  }

  /**
  * Move the character to the left.
  * @memberof MovebalObject
  */
  characterMoveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.walking_sound.play();
  }

  /**
 * Move the object to the left at a constant speed.
 * @memberof MovebalObject
 */
  objectMoveLeft() {
    this.leftIntervalId = setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 100);
  }

  /**
 * Move the object to the right at a constant speed.
 * @memberof MovebalObject
 */
  objectMoveRight() {
    this.rightIntervalId = setInterval(() => {
      this.x += this.speed;
    }, 1000 / 100);
  }

  /**
 * Make the object jump by applying a vertical speed and play the jumping sound.
 * @memberof MovebalObject
 */
  jump() {
    this.speedY = 25;
    this.jumping_sound.play();
  }

  /**
 * Check if the movable object is colliding with another movable object.
 * @memberof MovebalObject
 * @param {MovebalObject} mo - The other movable object to check for collision.
 * @param {number} [offsetX=0] - Optional offset in the X-direction for collision detection.
 * @param {number} [offsetY=0] - Optional offset in the Y-direction for collision detection.
 * @returns {boolean} True if the objects are colliding, otherwise false.
 */
  isColliding(mo, offsetX = 0, offsetY = 0) {
    return (
      this.x + this.width - this.offset.width > mo.x + mo.offset.x - offsetX &&
      this.y + this.height - this.offset.height > mo.y + mo.offset.y - offsetY &&
      this.x + this.offset.x < mo.x + mo.width - mo.offset.x + offsetX &&
      this.y + this.offset.y < mo.y + mo.height - mo.offset.y + offsetY
    );
  }


  /**
  * Check if the movable object is hurt.
  * @memberof MovebalObject
  * @returns {boolean} True if the object is hurt, otherwise false.
  */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 1000;
  }

  /**
 * Handle the action when the movable object is hit.
 * @memberof MovebalObject
 */
  hit() {
    if (this.isHurt()) {
      return;
    }
    this.lastHit = new Date().getTime();
    this.health -= 20;
    if (this.health == 0) {
      this.hurt_sound.pause();
      this.isDead = true;
      this.loseTheGame();
      this.lose_game_sound.play();
    }
    this.hurt_sound.play();
  }

  /**
  * Increase the coin count of the movable object.
  * @memberof MovebalObject
  */
  takeCoin() {
    this.coin += 20;
    this.coin_sound.play();
  }

  /**
 * Increase the bottle count of the movable object.
 * @memberof MovebalObject
 */
  takeBottle() {
    this.bottle_sound.play();
    this.bottle += 20;
  }

  /**
  * Stop the movement of the movable object after throwing a bottle.
  * @memberof MovebalObject
  */
  stopBottle() {
    this.speed = 0;
    this.speedY = 0;
    this.acceleration = 0;
    clearInterval(this.throwInterval);

    setTimeout(() => {
      world.bottle = "";
      world.throwableObject = world.throwableObject.filter(
        (bottle) => bottle !== this
      );
    }, 250);
  }

  /**
  * Clear character intervals used for animations.
  * @memberof MovebalObject
  */
  clearCharacterIntervals() {
    this.characterIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.characterIntervals = []; // Clear the intervals array
  }

  /**
  * Check for idle state and play appropriate animations.
  * @memberof MovebalObject
  */
  checkForIdle() {
    let intervalIdle = setInterval(() => {
      if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.isDead) {
        this.seconds += 200;
        if (this.seconds >= 7000) {
          this.playAnimation(this.IMAGES_LONG_IDLE);
          this.snore_sound.play();
        } else {
          this.playAnimation(this.IMAGES_IDLE);
        }
      }
    }, 1750);
    this.abortIdle(intervalIdle);
  }

  /**
   * Abort the idle state interval when user interaction occurs.
   * @memberof MovebalObject
   * @param {number} intervalIdle - The interval ID for the idle state.
   */
  abortIdle(intervalIdle) {
    document.addEventListener("keydown", () => {
      clearInterval(intervalIdle);
      this.seconds = 0;
    });
    document.addEventListener("touchstart", () => {
      clearInterval(intervalIdle);
      this.seconds = 0;
    });
  }
}
