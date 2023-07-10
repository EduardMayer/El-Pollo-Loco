class MovebalObject extends DrawableObject {
  speed = 0.20;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5 ;
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
      }else{
        this.speedY = 0;
        this.y = 185;
      }
    }, 1000 / 30);
  }

  isAboveGround() {
    if(this instanceof ThrowableObject){ // Throwable Object allways fall down
      return true;
    } else {
    return this.y < 185;
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
  

  

  isDead() {
    return this.health == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 1500; // Überprüft, ob weniger als 2000 Millisekunden (2 Sekunden) seit dem letzten Treffer vergangen sind
  }
  
  hit() {
    if (this.isHurt()) {
      return; // Der Gegner ist bereits verletzt, daher wird kein weiterer Schaden verursacht
    }
    // this.hurt_sound.play();
    this.lastHit = new Date().getTime();
    this.health -= 20;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  takeCoin(){
    this.coin += 20;
    this.coin_sound.play();
  }

  takeBottle(){
    this.bottle += 20;
    this.bottle_sound.play();
  }
}
