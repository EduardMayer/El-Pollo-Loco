class Chicken extends MovebalObject {
  IMAGES_SMALL_WALK = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];
  x = 200 + Math.random() * 500;
  y = 380;
  height = 50;
  width = 50;

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_SMALL_WALK);
    this.animate();
    this.speed = 0.05 + Math.random() * 0.25;
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_SMALL_WALK.length;
      let path = this.IMAGES_SMALL_WALK[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 300);
    this.moveLeft();
  }
}
