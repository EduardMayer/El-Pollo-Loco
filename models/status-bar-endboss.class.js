/**
 * Represents a status bar for the end boss, displaying the health level using images.
 * @extends DrawableObject
 */
class StatusBarEndboss extends DrawableObject {
    /**
     * An array of image paths representing different health levels of the end boss.
     * @type {Array<string>}
     */
    IMAGES_BOSS = [
      "img/7_statusbars/2_statusbar_endboss/boss0.png",
      "img/7_statusbars/2_statusbar_endboss/boss20.png",
      "img/7_statusbars/2_statusbar_endboss/boss40.png",
      "img/7_statusbars/2_statusbar_endboss/boss60.png",
      "img/7_statusbars/2_statusbar_endboss/boss80.png",
      "img/7_statusbars/2_statusbar_endboss/boss100.png",
    ];
  
    /**
     * The current health percentage of the end boss.
     * @type {number}
     */
    percentage = 100;
  
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
     * @default 550
     */
    x = 550;
  
    /**
     * The Y-coordinate of the status bar.
     * @type {number}
     * @default 0
     */
    y = 0;
  
    /**
     * Constructs a new StatusBarEndboss instance.
     * @constructor
     */
    constructor() {
      super();
      this.loadImages(this.IMAGES_BOSS);
      this.setPercentage(this.percentage);
    }
  
    /**
     * Set the health percentage of the end boss and update the displayed image accordingly.
     * @param {number} percentage - The health percentage value (0 to 100).
     */
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_BOSS[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    /**
     * Resolve the image index based on the current health percentage.
     * @returns {number} The index of the image in the IMAGES_BOSS array.
     */
    resolveImageIndex() {
      if (this.percentage == 100) {
        return 5;
      } else if (this.percentage >= 80) {
        return 4;
      } else if (this.percentage >= 60) {
        return 3;
      } else if (this.percentage >= 40) {
        return 2;
      } else if (this.percentage >= 20) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  