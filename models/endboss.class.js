class Endboss extends MovebalObject {
    IMAGES_BOSS_ALERT = [
      "img/4_enemie_boss_chicken/2_alert/G5.png",
      "img/4_enemie_boss_chicken/2_alert/G6.png",
      "img/4_enemie_boss_chicken/2_alert/G7.png",
      "img/4_enemie_boss_chicken/2_alert/G8.png",
      "img/4_enemie_boss_chicken/2_alert/G9.png",
      "img/4_enemie_boss_chicken/2_alert/G10.png",
      "img/4_enemie_boss_chicken/2_alert/G11.png",
      "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    x = 1700; 
    y = 60;
    height = 400;
    width = 400;
  
    constructor() {
      super().loadImage(this.IMAGES_BOSS_ALERT[0]);
      this.loadImages(this.IMAGES_BOSS_ALERT);
      this.animate();
    }
  
    animate() {
      setInterval(() => {
        let i = this.currentImage % this.IMAGES_BOSS_ALERT.length;
        let path = this.IMAGES_BOSS_ALERT[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }, 400);
    }
  }
  