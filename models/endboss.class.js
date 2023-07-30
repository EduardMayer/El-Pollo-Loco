class Endboss extends MovebalObject {
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

  x;
  y;
  height = 400;
  width = 400;
  offset = { x: 100, y: 150, width: 0, height: 0 };
  isDead = false;
  isWalking = false;
  hurtBoss = false;
  bossHitYou = false;
  healthBoss = 100;
  bossAttackCooldown = false;
  speed = 11.0;
  otherDirection = false;
  hitBossChicken = new Audio("audio/boss.wav");
  win_game_sound = new Audio("audio/winning.wav");

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

  hitSettings() {
    this.hitBossChicken.play();
    this.speed = 0;
    this.isWalking = false;
    this.hurtBoss = true;
    this.healthBoss -= 20;
    this.bossAttackCooldown = true;
  }

  afterHitSettings() {
    this.hurtBoss = false;
    this.speed += 15.0;
    this.bossAttackCooldown = false;
    this.isWalking = true;
  }

  bossAttack() {
    this.isWalking = false;
    this.bossHitYou = true;
    setTimeout(() => {
      this.bossHitYou = false;
      this.isWalking = true;
    }, 1000);
  }

  bossMoveLeft() {
    this.otherDirection = false;
    this.isWalking = true;
    this.x -= this.speed;
  }

  bossMoveRight() {
    this.otherDirection = true;
    this.isWalking = true;
    this.x += this.speed;
  }
}
