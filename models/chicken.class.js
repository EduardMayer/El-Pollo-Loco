class Chicken extends MovebalObject {
  IMAGES_WALK = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
  ];

  x = 300 + Math.random() * 1200;
  y = 370;
  height = 60;
  width = 60;
  speed = 0.05 + Math.random() * 0.25;
  isDead = false;
  offset = { x: 40, y: -10, width: 0, height: 0 };

  constructor() {
    super().loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    
  }

  animate() {
    setInterval(() => {
      if ( this.isDead === false) {
        this.playAnimation(this.IMAGES_WALK);
      } else {
        this.playAnimation(this.IMAGES_DEAD);
      }
    }, 300);
    this.objectMoveLeft();
  }
}
