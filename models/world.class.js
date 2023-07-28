class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  statusBarEndboss = new StatusBarEndboss();
  throwableObject = [];
  endboss;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.collisionDetection();
    this.endboss = this.level.endboss[0];
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.character.checkForIdle();
    }, 1000);

    setInterval(() => {
      this.checkThrowObjects();
      this.checkCharacterPosition();
    }, 100);

    
  }

  collisionDetection() {
    setInterval(() => {
      this.checkCollisionsWithEnemy();
      this.checkCollisionsWithCoin();
      this.checkCollisionsWithBottle();
      this.checkCollisionsWithEndboss();
    }, 100);
  }


  
  checkCharacterPosition() {
    if (this.endboss.isWalking) {
      if (this.character.x > this.endboss.x) {
        this.endboss.bossMoveRight();
      } else if (this.character.x < this.endboss.x) {
        this.endboss.bossMoveLeft();
      }
    } 

  }

  checkThrowObjects() {
    if (this.keyboard.D && this.character.bottle > 0 &&!this.character.isThrowing) {
      this.bottle = new ThrowableObject(
        this.character.x + 35,
        this.character.y + 85,
        this.character.otherDirection
      );
      this.throwableObject.push(this.bottle);
      this.character.bottle += 20;
      this.statusBarBottle.setPercentage(this.character.bottle);
      this.character.isThrowing = true; 
      setTimeout(() => {
        this.character.isThrowing = false;
      }, 200);
    }
  }

  checkCollisionsWithCoin() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, -75, -130)) {
        this.character.takeCoin();
        this.level.coins.splice(index, 1);
        this.statusBarCoin.setPercentage(this.character.coin);
      }
    });
  }

  checkCollisionsWithBottle() {
    this.level.bottles.forEach((bottle, bottleIndex) => {
      if (this.character.isColliding(bottle, -40, -80)) {
        this.character.takeBottle();
        this.level.bottles.splice(bottleIndex, 1);
        this.statusBarBottle.setPercentage(this.character.bottle);
      }
    });
  }

  checkCollisionsWithEndboss() {
    this.level.endboss.forEach((endboss) => {
      if (this.character.isColliding(endboss)) {
        if (!endboss.isDead) {
          this.endboss.bossAttack();
          this.character.hit();
          this.statusBarHp.setPercentage(this.character.health);
        }
      }
      this.throwableObject.forEach((object) => {
        if (object.isColliding(endboss) && !endboss.isDead) {
          object.setCollidedWithEnemy(true);
          this.endboss.hitBoss();
          this.statusBarEndboss.setPercentage(this.endboss.healthBoss);
        }
      });
    });
  }

  checkCollisionsWithEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround() && !enemy.isDead) {
          this.killEnemy(enemy);
          this.character.jump();
        } else if (!enemy.isDead) {
          this.character.hit();
          this.statusBarHp.setPercentage(this.character.health);
        }
      }
      this.throwableObject.forEach((object) => {
        if (object.isColliding(enemy) && !enemy.isDead) {
          this.killEnemy(enemy);
          object.setCollidedWithEnemy(true); // Flasche hat mit Enemy kollidiert
        }
      });
    });
  }

  killEnemy(enemy) {
    enemy.isDead = true;
    let time = new Date().getTime();

    let interval = setInterval(() => {
      enemy.speed = 0;
      let checkDate = new Date().getTime();
      if (checkDate > time) {
        clearInterval(interval);
      }
    }, 10);
    this.deleteEnemyAfterKill(enemy);
  }

  deleteEnemyAfterKill(enemy) {
    setTimeout(() => {
      const index = this.level.enemies.indexOf(enemy);
      if (index !== -1) {
        this.level.enemies.splice(index, 1);
      }
    }, 2000);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.level.enemies);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHp);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarEndboss);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.throwableObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      mo.mirrorImage(this.ctx);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      mo.restoreImage(this.ctx);
    }
  }
}
