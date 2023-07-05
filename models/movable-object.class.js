class MovebalObject {
  img;
  height = 100;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  health = 100;
  offset = { x: 0, y: 0, width: 0, height: 0 };
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 900 / 30);
  }

  isAboveGround() {
    return this.y < 175;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof Big_Chicken
    ) {
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
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

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
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
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.width > mo.x + mo.offset.x &&
      this.y + this.height - this.offset.height > mo.y + mo.offset.y &&
      this.x + this.offset.x < mo.x + mo.width - mo.offset.x &&
      this.y + this.offset.y < mo.y + mo.height - mo.offset.y
    );
  }

  hit() {
    this.health -= 1;
    //this.hurt_sound.play();
    if (this.health < 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;

    return timepassed < 1;
  }

  isDead() {
    return this.health == 0;
  }
}
