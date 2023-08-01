/**
 * Represents a salsa bottle object in the game.
 * @extends MovebalObject
 */
class Bottle extends MovebalObject {
  /**
   * The array of image paths for the walking animation of the salsa bottle.
   * @type {string[]}
   */
  IMAGES_WALK = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * The x-coordinate position of the salsa bottle.
   * @type {number}
   */
  x;

  /**
   * The y-coordinate position of the salsa bottle.
   * @type {number}
   */
  y;

  /**
   * The height of the salsa bottle.
   * @type {number}
   */
  height = 75;

  /**
   * The width of the salsa bottle.
   * @type {number}
   */
  width = 75;

  /**
   * Creates a new salsa bottle object.
   * @param {number} x - The x-coordinate position of the salsa bottle.
   * @param {number} y - The y-coordinate position of the salsa bottle.
   */
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.loadImages(this.IMAGES_WALK);
    this.animate();
    this.x = x;
    this.y = y;
  }

  /**
   * Starts the animation of the salsa bottle.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALK);
    }, 400);
  }
}
