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
  throwableObject = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.CollisionDetection()
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.character.checkForIdle();
      this.checkThrowObjects();
    }, 550);
  }

  checkThrowObjects() {
    if (this.keyboard.D) {
    let bottle = new ThrowableObject(
        this.character.x + 55,
        this.character.y + 100
      );
      this.throwableObject.push(bottle);
    }
  }
  

  CollisionDetection() {
    setInterval(() => {
      this.checkCollisionsWithEnemy();
      this.checkCollisionsWithItems();
    }, 100);
  }

  checkCollisionsWithEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isColliding(enemy) && this.character.isAboveGround() && !enemy.isDead) {
          this.killEnemy(enemy);
        } else if (!enemy.isDead) {
          this.character.hit();
          this.statusBarHp.setPercentage(this.character.health);
        }
      }
    });
  }
  
  killEnemy(enemy) {
    enemy.isDead = true;
    let time = new Date().getTime();
    this.character.jump();

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
      // Feind aus dem Array entfernen
      this.level.enemies.splice(index, 1);
    }
  }, 2000);
}
  
  checkCollisionsWithItems() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, -75, -130)) {
        this.character.takeCoin();
        this.level.coins.splice(index, 1);
        this.statusBarCoin.setPercentage(this.character.coin);
      } else {
        this.level.bottles.forEach((bottle, index) => {
          if (this.character.isColliding(bottle, -40, -80)) {
            this.character.takeBottle();
            this.level.bottles.splice(index, 1);
            this.statusBarBottle.setPercentage(this.character.bottle);
          }
        });
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.endboss);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHp);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.throwableObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.ctx.translate(-this.camera_x, 0);

    //draw() wird immer wieder aufgerufen
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
