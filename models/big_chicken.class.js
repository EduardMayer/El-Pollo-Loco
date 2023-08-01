/**
 * Represents a big chicken enemy in the game.
 * @extends MovebalObject
 */
class Big_Chicken extends MovebalObject {
  /**
   * The array of image paths for the walking animation of the big chicken.
   * @type {string[]}
   */
  IMAGES_WALK = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  /**
   * The array of image paths for the dead animation of the big chicken.
   * @type {string[]}
   */
  IMAGES_DEAD = ["./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  /**
   * The x-coordinate position of the big chicken.
   * @type {number}
   */
  x;

  /**
   * The y-coordinate position of the big chicken.
   * @type {number}
   */
  y = 360;

  /**
   * The height of the big chicken.
   * @type {number}
   */
  height = 75;

  /**
   * The width of the big chicken.
   * @type {number}
   */
  width = 75;

  /**
   * Represents if the big chicken is dead or not.
   * @type {boolean}
   */
  isDead = false;

  /**
   * The offset values for the animation.
   * @type {{x: number, y: number, width: number, height: number}}
   */
  offset = { x: 15, y: 0, width: 0, height: 0 };

  /**
   * Creates a new big chicken enemy.
   * @param {number} x - The x-coordinate position of the big chicken.
   */
  constructor(x) {
    super().loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.speed = 0.05 + Math.random() * 0.25;
    this.x = x;
  }

  /**
   * Starts the animation and movement of the big chicken.
   */
  animate() {
    setInterval(() => {
      if (this.isDead === false) {
        this.playAnimation(this.IMAGES_WALK);
      } else {
        this.playAnimation(this.IMAGES_DEAD);
      }
    }, 300);
    this.objectMoveLeft();
  }
}
