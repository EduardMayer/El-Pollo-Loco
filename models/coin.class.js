class Coin extends MovebalObject {
    IMAGES_WALK = [
      "img/8_coin/coin_1.png",
      "img/8_coin/coin_2.png"
    ];

    x;
    y;
    height = 125;
    width = 125;
  
    constructor(x, y) {
      super().loadImage(this.IMAGES_WALK[0]);
      this.loadImages(this.IMAGES_WALK);
      this.animate();
      this.x = x;
      this.y = y;
    }
  
    animate() {
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALK);
        }, 500);
      }
  }
  