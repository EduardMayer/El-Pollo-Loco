/**
 * Represents a drawable object in a game.
 * @class DrawableObject
 */
class DrawableObject {
  /**
   * Reference to the image of the object.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * Cache for loaded images.
   * @type {Object<string, HTMLImageElement>}
   */
  imageCache = {};

  /**
   * The index of the current image in the animation.
   * @type {number}
   */
  currentImage = 0;

  /**
   * The height of the object.
   * @type {number}
   * @default 100
   */
  height = 100;

  /**
   * The width of the object.
   * @type {number}
   * @default 100
   */
  width = 100;

  /**
   * Draw a frame for the object.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
   * @memberof DrawableObject
   */
  drawFrame(ctx) {
    if (
      this instanceof Chicken ||
      this instanceof Big_Chicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }

  /**
   * Draw the object on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
   * @memberof DrawableObject
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Load the image for the object from the given path.
   * @param {string} path - The path to the image file.
   * @memberof DrawableObject
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Load images from the given array of paths and cache them.
   * @param {string[]} arr - An array of paths to the image files.
   * @memberof DrawableObject
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
