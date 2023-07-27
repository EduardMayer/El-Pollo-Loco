class Big_Chicken extends MovebalObject {
    IMAGES_WALK = [
      "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
      "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
      "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];

    IMAGES_DEAD = [
      "./img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ];
    x = 400 + Math.random() * 1400;
    y = 360;
    height = 75;
    width = 75;
    isDead = false;
    offset = { x: 25, y: -5, width: 0, height: 0 };
  
    constructor() {
      super().loadImage(this.IMAGES_WALK[0]);
      this.loadImages(this.IMAGES_WALK);
      this.loadImages(this.IMAGES_DEAD);
      this.animate();
      this.speed = 0.05 + Math.random() * 0.25;
    }
  
    animate() {
      setInterval(() => {
        if (this.isDead === false) {
          this.playAnimation(this.IMAGES_WALK);
        } else {
          this.playAnimation(this.IMAGES_DEAD);
        }
      }, 300);
      this.objectMoveLeft();
    }
  }