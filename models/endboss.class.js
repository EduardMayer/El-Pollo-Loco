/**
 * Represents an end boss in a game, extending a movable object.
 * @class Endboss
 * @extends MovebalObject
 */
class Endboss extends MovebalObject {
   /**
   * Array of image paths for the boss's animation.
   * @type {string[]}
   */
  IMAGES_ALERT = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_WALK = [
    "./img/4_enemie_boss_chicken/1_walk/G1.png",
    "./img/4_enemie_boss_chicken/1_walk/G2.png",
    "./img/4_enemie_boss_chicken/1_walk/G3.png",
    "./img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ATTACK = [
    "./img/4_enemie_boss_chicken/3_attack/G13.png",
    "./img/4_enemie_boss_chicken/3_attack/G14.png",
    "./img/4_enemie_boss_chicken/3_attack/G15.png",
    "./img/4_enemie_boss_chicken/3_attack/G16.png",
    "./img/4_enemie_boss_chicken/3_attack/G17.png",
    "./img/4_enemie_boss_chicken/3_attack/G18.png",
    "./img/4_enemie_boss_chicken/3_attack/G19.png",
    "./img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "./img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "./img/4_enemie_boss_chicken/5_dead/G24.png",
    "./img/4_enemie_boss_chicken/5_dead/G25.png",
    "./img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

   /**
   * The x-coordinate of the boss's position.
   * @type {number}
   */
   x;

   /**
    * The y-coordinate of the boss's position.
    * @type {number}
    */
   y;
 
   /**
    * The height of the boss.
    * @type {number}
    * @default 400
    */
   height = 400;
 
   /**
    * The width of the boss.
    * @type {number}
    * @default 400
    */
   width = 400;
 
   /**
    * Offset values for positioning the boss.
    * @type {Object}
    */
   offset = { x: 100, y: 150, width: 0, height: 0 };
 
   /**
    * Flag indicating if the boss is dead.
    * @type {boolean}
    */
   isDead = false;
 
   /**
    * Flag indicating if the boss is currently walking.
    * @type {boolean}
    */
   isWalking = false;
 
   /**
    * Flag indicating if the boss is hurt.
    * @type {boolean}
    */
   hurtBoss = false;
 
   /**
    * Flag indicating if the boss hit the player.
    * @type {boolean}
    */
   bossHitYou = false;
 
   /**
    * The health points of the boss.
    * @type {number}
    */
   healthBoss = 100;
 
   /**
    * Flag indicating if the boss's attack is on cooldown.
    * @type {boolean}
    */
   bossAttackCooldown = false;
 
   /**
    * The speed of the boss's movement.
    * @type {number}
    * @default 11.0
    */
   speed = 11.0;
 
   /**
    * Flag indicating if the boss is moving in the other direction.
    * @type {boolean}
    */
   otherDirection = false;
 
   /**
    * Audio object for the sound when the boss is hit.
    * @type {Audio}
    */
   hitBossChicken = new Audio("audio/boss.wav");
 
   /**
    * Audio object for the sound when you win the game.
    * @type {Audio}
    */
   win_game_sound = new Audio("audio/winning.wav")

   /**
   * Create a new Endboss instance.
   * @constructor
   * @param {number} x - The initial x-coordinate of the boss's position.
   * @param {number} y - The initial y-coordinate of the boss's position.
   */
  constructor(x, y) {
    super().loadImage(this.IMAGES_ALERT[0]);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.x = x;
    this.y = y;
  }
  /**
   * Animate the boss's movements and actions.
   * @memberof Endboss
   */
  animate() {
    setInterval(() => {
      if (this.isDead) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.hurtBoss) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isWalking) {
        this.playAnimation(this.IMAGES_WALK);
      } else if (this.bossHitYou) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else {
        this.playAnimation(this.IMAGES_ALERT);
      }
    }, 300);
  }

   /**
   * Handle the boss getting hit.
   * @memberof Endboss
   */
   hitBoss() {
    if (!this.bossAttackCooldown) {
      this.hitSettings();
      if (this.healthBoss <= 0) {
        this.isDead = true;
        this.winTheGame();
      }
      setTimeout(() => {
        this.afterHitSettings();
      }, 500);
    }
  }

  /**
   * Handle settings after the boss gets hit.
   * @memberof Endboss
   */
  hitSettings() {
    this.hitBossChicken.play();
    this.speed = 0;
    this.isWalking = false;
    this.hurtBoss = true;
    this.healthBoss -= 20;
    this.bossAttackCooldown = true;
  }

  /**
   * Handle settings after the boss is hit.
   * @memberof Endboss
   */
  afterHitSettings() {
    this.hurtBoss = false;
    this.speed += 15.0;
    this.bossAttackCooldown = false;
    this.isWalking = true;
  }

  /**
   * Make the boss perform an attack.
   * @memberof Endboss
   */
  bossAttack() {
    this.isWalking = false;
    this.bossHitYou = true;
    setTimeout(() => {
      this.bossHitYou = false;
      this.isWalking = true;
    }, 1000);
  }

  /**
   * Move the boss to the left.
   * @memberof Endboss
   */
  bossMoveLeft() {
    this.otherDirection = false;
    this.isWalking = true;
    this.x -= this.speed;
  }

  /**
   * Move the boss to the right.
   * @memberof Endboss
   */
  bossMoveRight() {
    this.otherDirection = true;
    this.isWalking = true;
    this.x += this.speed;
  }
}
