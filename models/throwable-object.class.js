class ThrowableObject extends MovebalObject {
    IMAGES_THROW = [
      "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
      "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
      "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
      "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
  
    IMAGES_SPLASH = [
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
      "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];
  
    constructor(x, y) {
      super().loadImage(this.IMAGES_THROW[0]);
      this.loadImages(this.IMAGES_THROW);
      this.loadImages(this.IMAGES_SPLASH);
      this.x = x;
      this.y = y;
      this.height = 70;
      this.width = 80;
      this.throw();
    }
  
    throw() {
      this.playThrowAnimation(this.IMAGES_THROW);
      this.speedY = 30;
      this.applyGravity();
      setInterval(() => {
        this.x += 12;
      }, 25);
    }
  
    playThrowAnimation(images) {
        this.currentImage = 0; // Setze den Anfangswert von currentImage auf 0
        const animationInterval = setInterval(() => {
          let i = this.currentImage % images.length;
          let path = images[i];
          this.img = this.imageCache[path];
          this.currentImage++;
      
          if (this.currentImage >= images.length) {
            this.currentImage = 0; // Setze currentImage auf 0, um die Animation zu wiederholen
          }
        }, 75); // Passe das Intervall nach Bedarf an
      }
  }