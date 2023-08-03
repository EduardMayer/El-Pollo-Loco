/**
 * Represents a throwable object in the game, which can be thrown by the player character.
 * Inherits from the MovebalObject class.
 * @extends MovebalObject
 */
class ThrowableObject extends MovebalObject {
  /**
   * An array of image paths representing the rotation animation of the throwable object.
   * @type {Array<string>}
   */
  IMAGES_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * An array of image paths representing the splash animation of the throwable object.
   * @type {Array<string>}
   */
  IMAGES_SPLASH = [
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * The shatter sound when the throwable object collides with an enemy or the ground.
   * @type {Audio}
   */
  shatter_sound = new Audio("audio/glass-shatter.wav");

  /**
   * The throw sound when the throwable object is thrown.
   * @type {Audio}
   */
  throw_sound = new Audio("audio/throw.wav");

  /**
   * Flag to indicate whether the throwable object is currently being thrown.
   * @type {boolean}
   */
  throwing = false;

  /**
   * Flag to indicate whether the throwable object has collided with an enemy.
   * @type {boolean}
   */
  collidedWithEnemy = false;

  /**
   * Flag to indicate whether the throwable object has shattered (landed on the ground or collided with an enemy).
   * @type {boolean}
   */
  hasShattered = false;

  /**
   * Constructs a new ThrowableObject instance.
   * @constructor
   * @param {number} x - The initial X-coordinate of the throwable object.
   * @param {number} y - The initial Y-coordinate of the throwable object.
   * @param {boolean} otherDirection - Flag indicating the direction of the throw (left or right).
   */
  constructor(x, y, otherDirection) {
    super();
    this.loadImage(this.IMAGES_ROTATION[0]);
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 70;
    this.otherDirection = otherDirection;
    this.throw();
    this.animate();
  }

  /**
   * Throws the throwable object, initiating its motion.
   */
  throw() {
    this.throwing = true;
    this.speedY = 25;
    this.bottle = -20;
    this.applyGravity();
    this.throw_sound.play();
    if (this.otherDirection) {
      this.throwInterval = setInterval(() => {
        this.x -= 12;
      }, 25);
    } else {
      this.throwInterval = setInterval(() => {
        this.x += 12;
      }, 25);
    }
  }

  /**
   * Animates the throwable object based on its current state (rotation, splash, or collision with enemy).
   */
  animate() {
      setInterval(() => {
        if (this.throwing && !this.collidedWithEnemy) {
          if (this.y >= 370) {
            this.animateSplash();
          } else {
            this.playAnimation(this.IMAGES_ROTATION);
          }
        } else if (this.collidedWithEnemy) {
          this.animateCollision();
        }
      }, 85);
  }

  /**
   * Animates the splash when the throwable object lands on the ground or collides with an enemy.
   */
  animateSplash() {
    this.stopBottle();
    this.playAnimation(this.IMAGES_SPLASH);
    if (!this.hasShattered) {
      this.shatter_sound.play();
      this.hasShattered = true;
    }
  }

  /**
   * Animates the splash when the throwable object collides with an enemy.
   */
  animateCollision() {
    this.stopBottle();
    this.playAnimation(this.IMAGES_SPLASH);
    if (!this.hasShattered) {
      this.shatter_sound.play();
      this.hasShattered = true;
    }
  }

  /**
   * Sets the `collidedWithEnemy` flag to indicate whether the throwable object has collided with an enemy.
   * @param {boolean} value - The new value of the flag (true or false).
   */
  setCollidedWithEnemy(value) {
    this.collidedWithEnemy = value;
  }
}
