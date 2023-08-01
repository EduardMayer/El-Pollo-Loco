/**
 * Represents a status bar for bottles, displaying the fill level using images.
 * @extends DrawableObject
 */
class StatusBarBottle extends DrawableObject {
    /**
     * An array of image paths representing different fill levels of the bottle.
     * @type {Array<string>}
     */
    IMAGES_BOTTLE = [
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
    ];
  
    /**
     * The current fill percentage of the bottle.
     * @type {number}
     */
    percentage = 0;
  
    /**
     * The width of the status bar.
     * @type {number}
     * @default 150
     */
    width = 150;
  
    /**
     * The height of the status bar.
     * @type {number}
     * @default 50
     */
    height = 50;
  
    /**
     * The X-coordinate of the status bar.
     * @type {number}
     * @default 10
     */
    x = 10;
  
    /**
     * The Y-coordinate of the status bar.
     * @type {number}
     * @default 80
     */
    y = 80;
  
    /**
     * Constructs a new StatusBarBottle instance.
     * @constructor
     */
    constructor() {
      super();
      this.loadImages(this.IMAGES_BOTTLE);
      this.setPercentage(this.percentage);
    }
  
    /**
     * Set the fill percentage of the bottle and update the displayed image accordingly.
     * @param {number} percentage - The fill percentage value (0 to 100).
     */
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_BOTTLE[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    /**
     * Resolve the image index based on the current fill percentage.
     * @returns {number} The index of the image in the IMAGES_BOTTLE array.
     */
    resolveImageIndex() {
      if (this.percentage == 20) {
        return 1;
      } else if (this.percentage == 40) {
        return 2;
      } else if (this.percentage == 60) {
        return 3;
      } else if (this.percentage == 80) {
        return 4;
      } else if (this.percentage >= 100) {
        return 5;
      } else {
        return 0;
      }
    }
  }
  