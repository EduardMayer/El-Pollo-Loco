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

    IMAGES_BOSS_WALK = [
      "img/4_enemie_boss_chicken/1_walk/G1.png",
      "img/4_enemie_boss_chicken/1_walk/G2.png",
      "img/4_enemie_boss_chicken/1_walk/G3.png",
      "img/4_enemie_boss_chicken/1_walk/G4.png",
    ];

    IMAGES_BOSS_ATTACK = [
      "img/4_enemie_boss_chicken/3_attack/G13.png",
      "img/4_enemie_boss_chicken/3_attack/G14.png",
      "img/4_enemie_boss_chicken/3_attack/G15.png",
      "img/4_enemie_boss_chicken/3_attack/G16.png",
      "img/4_enemie_boss_chicken/3_attack/G17.png",
      "img/4_enemie_boss_chicken/3_attack/G18.png",
      "img/4_enemie_boss_chicken/3_attack/G19.png",
      "img/4_enemie_boss_chicken/3_attack/G20.png",
    ];

    IMAGES_BOSS_HURT = [
      "img/4_enemie_boss_chicken/4_hurt/G21.png",
      "img/4_enemie_boss_chicken/4_hurt/G22.png",
      "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];

    IMAGES_BOSS_DEAD = [
      "img/4_enemie_boss_chicken/5_dead/G24.png",
      "img/4_enemie_boss_chicken/5_dead/G25.png",
      "img/4_enemie_boss_chicken/5_dead/G26.png",
    ];

    x = 1700; 
    y = 60;
    height = 400;
    width = 400;
  
    constructor() {
      super().loadImage(this.IMAGES_BOSS_ALERT[0]);
      this.loadImages(this.IMAGES_BOSS_ALERT);
      this.loadImages(this.IMAGES_BOSS_WALK);
      this.loadImages(this.IMAGES_BOSS_ATTACK);
      this.loadImages(this.IMAGES_BOSS_HURT);
      this.loadImages(this.IMAGES_BOSS_DEAD);
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
  