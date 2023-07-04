class Big_Chicken extends MovebalObject {
    IMAGES_WALK = [
      "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
      "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
    ];
    x = 400 + Math.random() * 1400;
    y = 360;
    height = 75;
    width = 75;
  
    constructor() {
      super().loadImage(this.IMAGES_WALK[0]);
      this.loadImages(this.IMAGES_WALK);
      this.animate();
      this.speed = 0.05 + Math.random() * 0.25;
    }
  
    animate() {
      setInterval(() => {
        this.playAnimation(this.IMAGES_WALK);
      }, 300);
      this.objectMoveLeft();
    }
  }