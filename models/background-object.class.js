/**
 * Represents a background object in the game.
 * @extends MovebalObject
 */
class BackgroundObject extends MovebalObject {
  /**
   * The height of the background object.
   * @type {number}
   */
  height = 480;

  /**
   * The width of the background object.
   * @type {number}
   */
  width = 720;

  /**
   * Creates a new background object.
   * @param {string} imagepath - The path to the image of the background object.
   * @param {number} x - The x-coordinate position of the background object.
   */
  constructor(imagepath, x) {
    super().loadImage(imagepath);

    /**
     * The x-coordinate position of the background object.
     * @type {number}
     */
    this.x = x;

    /**
     * The y-coordinate position of the background object.
     * @type {number}
     */
    this.y = 480 - this.height;
  }
}
