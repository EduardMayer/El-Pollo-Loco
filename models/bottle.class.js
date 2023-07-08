class Bottle extends MovebalObject {
    IMAGES_WALK = [
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
      "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    x = 150 + Math.random() * 1100;
    y = 145 + Math.random() * 130;
    height = 70;
    width = 70;
  
    constructor() {
      super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
      this.loadImages(this.IMAGES_WALK);
      this.animate();
    }
  
    animate() {
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALK);
        }, 400);
      }
  }
  