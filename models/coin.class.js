/**
 * Represents a coin that extends a movable object in a game.
 * @class Coin
 * @extends MovebalObject
 */
class Coin extends MovebalObject {
  /**
   * Array of image paths for the coin's animation.
   * @type {string[]}
   */
  IMAGES_WALK = [
    "img/8_coin/coin_1.png",
    "img/8_coin/coin_2.png"
  ];

  /**
   * The x-coordinate of the coin's position.
   * @type {number}
   */
  x;

  /**
   * The y-coordinate of the coin's position.
   * @type {number}
   */
  y;

  /**
   * The height of the coin.
   * @type {number}
   */
  height = 125;

  /**
   * The width of the coin.
   * @type {number}
   */
  width = 125;

  /**
   * Create a new Coin instance.
   * @constructor
   * @param {number} x - The initial x-coordinate of the coin's position.
   * @param {number} y - The initial y-coordinate of the coin's position.
   */
  constructor(x, y) {
    super().loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.animate();
    this.x = x;
    this.y = y;
  }

  /**
   * Animate the coin's animation.
   * @memberof Coin
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALK);
    }, 500);
  }
}
