class ThrowableObject extends MovebalObject {
  IMAGES_ROTATION = [
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
  shatter_sound = new Audio("audio/glass-shatter.wav")
  throw_sound = new Audio("audio/throw.wav");
  throwing = false;
  collidedWithEnemy = false;
  hasShattered = false;
 
  
  constructor(x, y, otherDirection) {
    super();
    this.loadImage(this.IMAGES_ROTATION[0]);
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 70;
    this.otherDirection = otherDirection;
    this.throw();
    this.animate();
  }

  throw() { 
    this.throwing = true;
    this.speedY = 25;
    this.bottle =- 20;
    this.applyGravity();
    this.throw_sound.play();
    if (this.otherDirection) {
      this.throwInterval = setInterval(() => {
        this.x -= 12;
      }, 25);
    } else {
      this.throwInterval = setInterval(() => {
        this.x += 12;
      }, 25);
    }
  }

 
  animate() {
    setInterval(() => {
      if (this.throwing && !this.collidedWithEnemy) {
        if (this.y >= 370) {
          this.animateSplash();
        } else {
          this.playAnimation(this.IMAGES_ROTATION);
        }
      } else if (this.collidedWithEnemy) {
        this.animateCollision();
      }
    }, 85);
  }

  animateSplash() {
    this.stopBottle();
    this.playAnimation(this.IMAGES_SPLASH);
    if (!this.hasShattered) {
      this.shatter_sound.play();
      this.hasShattered = true;
    }
  }

  animateCollision() {
    this.stopBottle();
    this.playAnimation(this.IMAGES_SPLASH);
    if (!this.hasShattered) {
      this.shatter_sound.play();
      this.hasShattered = true;
    }
  }


  setCollidedWithEnemy(value) {
    this.collidedWithEnemy = value;
  }
  

}
