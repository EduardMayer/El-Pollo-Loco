class MovebalObject extends DrawableObject {
  speed = 0.2;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  offset = { x: 0, y: 0, width: 0, height: 0 };
  seconds = 0;
  lastHit = 0;
  coin = 0;
  bottle = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else {
        this.speedY = 0;
        this.y = 185;
      }
    }, 1000 / 30);
  }

  loseTheGame() {
    this.fallDown();
    bg_music.pause();
    document.getElementById("loseGameContainer").classList.remove("d-none");
    document
      .getElementById("loseGameContainer")
      .classList.add("loseGameContainer");
    this.lose_game_sound.play();
  }

  winTheGame() {
    this.fallDown();
    bg_music.pause();
    document.getElementById("winGameContainer").classList.remove("d-none");
    document
      .getElementById("winGameContainer")
      .classList.add("winGameContainer");
    this.win_game_sound.play();
  }

  fallDown() {
    setInterval(() => {
      this.speed = 0;
      this.y += 15;
    }, 100);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
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
    this.leftIntervalId = setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 100);
  }

  objectMoveRight() {
    this.rightIntervalId = setInterval(() => {
      this.x += this.speed;
    }, 1000 / 100);
  }

  jump() {
    this.speedY = 25;
    this.jumping_sound.play();
  }

  isColliding(mo, offsetX = 0, offsetY = 0) {
    return (
      this.x + this.width - this.offset.width > mo.x + mo.offset.x - offsetX &&
      this.y + this.height - this.offset.height >
        mo.y + mo.offset.y - offsetY &&
      this.x + this.offset.x < mo.x + mo.width - mo.offset.x + offsetX &&
      this.y + this.offset.y < mo.y + mo.height - mo.offset.y + offsetY
    );
  }

  isDead() {
    return this.health == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    return timePassed < 1000;
  }

  hit() {
    if (this.isHurt()) {
      return; //Der Gegner ist bereits verletzt, daher wird kein weiterer Schaden verursacht
    }
    this.lastHit = new Date().getTime();
    this.health -= 0;
    if (this.health < 0) {
      this.health = 0;
      this.hurt_sound.pause();
    }
    this.hurt_sound.play();
  }

  takeCoin() {
    this.coin += 20;
    this.coin_sound.play();
  }

  takeBottle() {
    this.bottle_sound.play();
    this.bottle += 20;
  }

  stopBottle() {
    this.speed = 0;
    this.speedY = 0;
    this.acceleration = 0;
    clearInterval(this.throwInterval);

    setTimeout(() => {
      world.bottle = "";
      world.throwableObject = world.throwableObject.filter(
        (bottle) => bottle !== this
      );
    }, 250);
  }
}
