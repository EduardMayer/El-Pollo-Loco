/**
 * Represents a small chicken enemy in the game.
 * @extends MovebalObject
 */
class Chicken extends MovebalObject {
  /**
   * The array of image paths for the walking animation of the small chicken.
   * @type {string[]}
   */
  IMAGES_WALK = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  /**
   * The array of image paths for the dead animation of the small chicken.
   * @type {string[]}
   */
  IMAGES_DEAD = [
    "./img/3_enemies_chicken/chicken_small/2_dead/dead.png"
  ];

  /**
   * The x-coordinate position of the small chicken.
   * @type {number}
   */
  x = 450 + Math.random() * 2200;

  /**
   * The y-coordinate position of the small chicken.
   * @type {number}
   */
  y = 370;

  /**
   * The height of the small chicken.
   * @type {number}
   */
  height = 60;

  /**
   * The width of the small chicken.
   * @type {number}
   */
  width = 60;

  /**
   * The speed of the small chicken.
   * @type {number}
   */
  speed = 0.05 + Math.random() * 0.25;

  /**
   * Represents if the small chicken is dead or not.
   * @type {boolean}
   */
  isDead = false;

  /**
   * The offset values for the animation.
   * @type {{x: number, y: number, width: number, height: number}}
   */
  offset = { x: 25, y: -5, width: 0, height: 0 };

  /**
   * Creates a new small chicken enemy.
   */
  constructor() {
    super().loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  /**
   * Starts the animation and movement of the small chicken.
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
