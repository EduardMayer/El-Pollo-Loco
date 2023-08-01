/**
 * Represents a status bar for the player's health points (HP), displaying the HP level using images.
 * @extends DrawableObject
 */
class StatusBarHp extends DrawableObject {
    /**
     * An array of image paths representing different HP levels of the player.
     * @type {Array<string>}
     */
    IMAGES_HP = [
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
      "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
    ];
  
    /**
     * The current HP percentage of the player.
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
     * @default 10
     */
    x = 10;
  
    /**
     * The Y-coordinate of the status bar.
     * @type {number}
     * @default 0
     */
    y = 0;
  
    /**
     * Constructs a new StatusBarHp instance.
     * @constructor
     */
    constructor() {
      super();
      this.loadImages(this.IMAGES_HP);
      this.setPercentage(this.percentage);
    }
  
    /**
     * Set the HP percentage of the player and update the displayed image accordingly.
     * @param {number} percentage - The HP percentage value (0 to 100).
     */
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_HP[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    /**
     * Resolve the image index based on the current HP percentage.
     * @returns {number} The index of the image in the IMAGES_HP array.
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
  