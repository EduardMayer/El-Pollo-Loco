class Chicken extends MovebalObject {
  IMAGES_WALK = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];
  x = 300 + Math.random() * 1200;
  y = 380;
  height = 50;
  width = 50;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
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
