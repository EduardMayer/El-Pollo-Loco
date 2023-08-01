/**
 * Represents the game world that contains all the game elements and manages the game's logic.
 */
class World {
  /**
   * The player character in the game.
   * @type {Character}
   */
  character = new Character();

  /**
   * The current level of the game.
   * @type {Level}
   */
  level = level1;

  /**
   * The canvas element on which the game is rendered.
   * @type {HTMLCanvasElement}
   */
  canvas;

  /**
   * The 2D rendering context of the canvas.
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /**
   * The keyboard input manager for controlling the game.
   * @type {Keyboard}
   */
  keyboard;

  /**
   * The X-coordinate of the camera view in the game world.
   * @type {number}
   */
  camera_x = 0;

  /**
   * The status bar for the player character's health.
   * @type {StatusBarHp}
   */
  statusBarHp = new StatusBarHp();

  /**
   * The status bar for the number of coins collected by the player character.
   * @type {StatusBarCoin}
   */
  statusBarCoin = new StatusBarCoin();

  /**
   * The status bar for the number of bottles collected by the player character.
   * @type {StatusBarBottle}
   */
  statusBarBottle = new StatusBarBottle();

  /**
   * The status bar for the end boss's health.
   * @type {StatusBarEndboss}
   */
  statusBarEndboss = new StatusBarEndboss();

  /**
   * An array that stores all the throwable objects in the game.
   * @type {Array<ThrowableObject>}
   */
  throwableObject = [];

  /**
   * The end boss object in the game.
   * @type {Endboss}
   */
  endboss;

  /**
   * An array that stores all the intervals used in the game world.
   * @type {Array<number>}
   */
  worldIntervals = [];

  /**
   * Constructs a new World instance.
   * @constructor
   * @param {HTMLCanvasElement} canvas - The canvas element for rendering the game.
   * @param {Keyboard} keyboard - The keyboard input manager for controlling the game.
   */
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

  /**
   * Sets up the world and assigns the world to the player character.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Starts the game loop and runs the game logic.
   */
  run() {
    let idleInterval = setInterval(() => {
      this.character.checkForIdle();
    }, 1000);
    this.worldIntervals.push(idleInterval);

    let throwObjectsInterval = setInterval(() => {
      this.checkThrowObjects();
      this.checkCharacterPosition();
    }, 100);
    this.worldIntervals.push(throwObjectsInterval);
  }

  /**
   * Checks for collisions between the game elements.
   */
  collisionDetection() {
    let collisionsInterval = setInterval(() => {
      this.checkCollisionsWithEnemy();
      this.checkCollisionsWithCoin();
      this.checkCollisionsWithBottle();
      this.checkCollisionsWithEndboss();
    }, 100);
    this.worldIntervals.push(collisionsInterval);
  }

  /**
   * Clears all the intervals used in the game world.
   */
  clearWorldIntervals() {
    this.worldIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.worldIntervals = [];
  }

  /**
   * Checks the position of the player character and the end boss, and makes the end boss move accordingly.
   */
  checkCharacterPosition() {
    if (this.endboss.isWalking && !this.character.isDead) {
      if (this.character.x > this.endboss.x) {
        this.endboss.bossMoveRight();
      } else if (this.character.x < this.endboss.x) {
        this.endboss.bossMoveLeft();
      }
    }
  }

  /**
   * Checks if the player character can throw an object and throws the object if possible.
   */
  checkThrowObjects() {
    if (
      this.keyboard.D &&
      this.character.bottle > 0 &&
      !this.character.isThrowing
    ) {
      this.bottle = new ThrowableObject(
        this.character.x + 35,
        this.character.y + 85,
        this.character.otherDirection
      );
      this.throwableObject.push(this.bottle);
      this.character.bottle -= 20;
      this.statusBarBottle.setPercentage(this.character.bottle);
      this.character.isThrowing = true;
      setTimeout(() => {
        this.character.isThrowing = false;
      }, 300);
    }
  }

  /**
   * Checks for collisions between the player character and coins, and collects the coins if collided.
   */
  checkCollisionsWithCoin() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin, -75, -130)) {
        this.character.takeCoin();
        this.level.coins.splice(index, 1);
        this.statusBarCoin.setPercentage(this.character.coin);
      }
    });
  }

  /**
   * Checks for collisions between the player character and bottles, and collects the bottles if collided.
   */
  checkCollisionsWithBottle() {
    this.level.bottles.forEach((bottle, bottleIndex) => {
      if (this.character.isColliding(bottle, -40, -80)) {
        this.character.takeBottle();
        this.level.bottles.splice(bottleIndex, 1);
        this.statusBarBottle.setPercentage(this.character.bottle);
      }
    });
  }

  /**
   * Checks for collisions between the player character's throwable objects and the end boss, and damages the end boss if collided.
   */
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

  /**
   * Checks for collisions between the player character and enemies, and handles the consequences of the collisions.
   */
  checkCollisionsWithEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround() && !enemy.isDead) {
          this.killEnemy(enemy);
          this.character.chicken_sound.play();
          this.character.jump();
        } else if (!enemy.isDead) {
          this.character.hit();
          this.statusBarHp.setPercentage(this.character.health);
        }
      }
      this.throwableObject.forEach((object) => {
        if (object.isColliding(enemy) && !enemy.isDead) {
          this.killEnemy(enemy);
          this.character.chicken_sound.play();
          object.setCollidedWithEnemy(true);
        }
      });
    });
  }

  /**
   * Kills an enemy in the game.
   * @param {Enemy} enemy - The enemy to be killed.
   */
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

  /**
   * Removes a killed enemy from the game after a certain time delay.
   * @param {Enemy} enemy - The enemy to be removed.
   */
  deleteEnemyAfterKill(enemy) {
    setTimeout(() => {
      const index = this.level.enemies.indexOf(enemy);
      if (index !== -1) {
        this.level.enemies.splice(index, 1);
      }
    }, 2000);
  }

  /**
   * Draws the game world and updates it at a constant frame rate.
   */
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

  /**
   * Adds an array of objects to the game map for rendering.
   * @param {Array<DrawableObject>} objects - The array of objects to be added to the map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a drawable object to the game map for rendering.
   * @param {DrawableObject} mo - The drawable object to be added to the map.
   */
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
