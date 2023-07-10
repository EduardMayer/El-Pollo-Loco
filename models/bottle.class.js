class Bottle extends MovebalObject {
    IMAGES_WALK = [
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    x;
    y;
    height = 75;
    width = 75;
  
    constructor(x, y) {
      super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
      this.loadImages(this.IMAGES_WALK);
      this.animate();
      this.x = x;
      this.y = y; 
    }
  
    animate() {
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALK);
        }, 400);
      }
  }
  