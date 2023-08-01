/**
 * Represents a cloud that extends a movable object in a game.
 * @class Cloud
 * @extends MovebalObject
 */
class Cloud extends MovebalObject {
  /**
   * The height of the cloud.
   * @type {number}
   */
  height = 350;

  /**
   * The width of the cloud.
   * @type {number}
   */
  width = 350;

  /**
   * The y-coordinate of the cloud's position.
   * @type {number}
   */
  y = 0;

  /**
   * The x-coordinate of the cloud's position.
   * @type {number}
   */
  x;

  /**
   * The speed of the cloud's movement.
   * @type {number}
   */
  speed = 0.05;

  /**
   * Create a new Cloud instance.
   * @constructor
   * @param {string} imagepath - The path to the image of the cloud.
   * @param {number} x - The initial x-coordinate of the cloud's position.
   */
  constructor(imagepath, x) {
    super().loadImage(imagepath);
    this.animate();
    this.x = x;
  }

  /**
   * Animate the cloud's leftward movement.
   * @memberof Cloud
   */
  animate() {
    this.objectMoveLeft();
  }
}
