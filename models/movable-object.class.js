class MovebalObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offset = { x: 0, y: 0, width: 0, height: 0 };
  health = 100;
  lastHit = 0;
  coin = 0;
  bottle = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 900 / 30);
  }

  isAboveGround() {
    if(this instanceof ThrowableObject){ // Throwable Object allways fall down
      return true;
    } else {
    return this.y < 175;
    }
  }

  mirrorImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  restoreImage(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  characterMoveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.walking_sound.play();
  }

  characterMoveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.walking_sound.play();
  }

  objectMoveLeft() {
    setInterval(() => {
      this.x -= this.speed; // Ändere die Geschwindigkeit nach Bedarf
    }, 1000 / 100); // Ändere das Intervall nach Bedarf
  }

  jump() {
    this.speedY = 25;
    this.jumping_sound.play();
  }

  // Bessere Formel zur Kollisionsberechnung (Genauer)
  // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt.
  // Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  isColliding(mo, offsetX = 0, offsetY = 0) {
    return (
      this.x + this.width - this.offset.width > mo.x + mo.offset.x - offsetX &&
      this.y + this.height - this.offset.height > mo.y + mo.offset.y - offsetY &&
      this.x + this.offset.x < mo.x + mo.width - mo.offset.x + offsetX &&
      this.y + this.offset.y < mo.y + mo.height - mo.offset.y + offsetY
    );
  }
  

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 2000;
    return timepassed < 1;
  }

  isDead() {
    return this.health == 0;
  }

  hit() {
    this.health -= 20;
    //this.hurt_sound.play();
    if (this.health < 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  takeCoin(){
    this.coin += 20;
    this.coin_sound.play();
  }

  takeBottle(){
    this.bottle += 20;
    
  }
}
