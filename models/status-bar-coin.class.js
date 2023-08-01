/**
 * Represents a status bar for coins, displaying the fill level using images.
 * @extends DrawableObject
 */
class StatusBarCoin extends DrawableObject {
    /**
     * An array of image paths representing different fill levels of the coin.
     * @type {Array<string>}
     */
    IMAGES_COIN = [
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
      "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
    ];
  
    /**
     * The current fill percentage of the coin.
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
     * @default 40
     */
    y = 40;
  
    /**
     * Constructs a new StatusBarCoin instance.
     * @constructor
     */
    constructor() {
      super();
      this.loadImages(this.IMAGES_COIN);
      this.setPercentage(this.percentage);
    }
  
    /**
     * Set the fill percentage of the coin and update the displayed image accordingly.
     * @param {number} percentage - The fill percentage value (0 to 100).
     */
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES_COIN[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    /**
     * Resolve the image index based on the current fill percentage.
     * @returns {number} The index of the image in the IMAGES_COIN array.
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
  