/**
 * Represents a character that extends a movable object in a game.
 * @class Character
 * @extends MovebalObject
 */
class Character extends MovebalObject {
   /**
   * Arrays of image paths for the character's animation.
   * @type {string[]}
   */
  IMAGES_IDLE = [
    "./img/2_character_pepe/1_idle/idle/I-1.png",
    "./img/2_character_pepe/1_idle/idle/I-2.png",
    "./img/2_character_pepe/1_idle/idle/I-3.png",
    "./img/2_character_pepe/1_idle/idle/I-4.png",
    "./img/2_character_pepe/1_idle/idle/I-5.png",
    "./img/2_character_pepe/1_idle/idle/I-6.png",
    "./img/2_character_pepe/1_idle/idle/I-7.png",
    "./img/2_character_pepe/1_idle/idle/I-8.png",
    "./img/2_character_pepe/1_idle/idle/I-9.png",
    "./img/2_character_pepe/1_idle/idle/I-10.png",
  ];
  IMAGES_LONG_IDLE = [
    "./img/2_character_pepe/1_idle/long_idle/I-11.png",
    "./img/2_character_pepe/1_idle/long_idle/I-12.png",
    "./img/2_character_pepe/1_idle/long_idle/I-13.png",
    "./img/2_character_pepe/1_idle/long_idle/I-14.png",
    "./img/2_character_pepe/1_idle/long_idle/I-15.png",
    "./img/2_character_pepe/1_idle/long_idle/I-16.png",
    "./img/2_character_pepe/1_idle/long_idle/I-17.png",
    "./img/2_character_pepe/1_idle/long_idle/I-18.png",
    "./img/2_character_pepe/1_idle/long_idle/I-19.png",
    "./img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];
  IMAGES_WALK = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];
  IMAGES_JUMP = [
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-31.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-32.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-33.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-34.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-35.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-36.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-37.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-38.png",
    "/El-Pollo-Loco/img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURT = [
    "./img/2_character_pepe/4_hurt/H-41.png",
    "./img/2_character_pepe/4_hurt/H-42.png",
    "./img/2_character_pepe/4_hurt/H-43.png",
  ];
  IMAGES_DEAD = [
    "./img/2_character_pepe/5_dead/D-51.png",
    "./img/2_character_pepe/5_dead/D-52.png",
    "./img/2_character_pepe/5_dead/D-53.png",
    "./img/2_character_pepe/5_dead/D-54.png",
    "./img/2_character_pepe/5_dead/D-55.png",
    "./img/2_character_pepe/5_dead/D-56.png",
    "./img/2_character_pepe/5_dead/D-57.png",
  ];

  /**
   * Ingame soundeffects.
   * @type {audio}
   */
  lose_game_sound = new Audio("audio/loseguitar3.wav");
  jumping_sound = new Audio("audio/jump.wav");
  walking_sound = new Audio("audio/sand-walk1.wav");
  hurt_sound = new Audio("audio/hurt1.wav");
  coin_sound = new Audio("audio/coin.wav");
  bottle_sound = new Audio("audio/bottle2.wav");
  snore_sound = new Audio("audio/snore2.wav");
  chicken_sound = new Audio("audio/chicken.wav")

  /**
   * The height of the character.
   * @type {number}
   */
  height = 250;

  /**
   * The width of the character.
   * @type {number}
   */
  width = 125;

  /**
   * The speed of the character.
   * @type {number}
   */
  speed = 1.8;

  /**
   * Reference to the world object in the game.
   * @type {World}
   */
  world;

  /**
   * The x-coordinate of the character's position.
   * @type {number}
   */
  x = 130;

  /**
   * The y-coordinate of the character's position.
   * @type {number}
   */
  y = 185;

  /**
   * The health points of the character.
   * @type {number}
   */
  health = 100;

  /**
   * The number of bottles collected by the character.
   * @type {number}
   */
  bottle = 0;

  /**
   * Flag indicating if the character is currently idling.
   * @type {boolean}
   */
  idleInterval = false;

  /**
   * Flag indicating if the character is dead.
   * @type {boolean}
   */
  isDead = false;

  /**
     * Create a new Character instance.
     * @constructor
     */
  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();

  }

  /**
 * Animate the character's movements and actions.
 * @memberof Character
 */
  animate() {
    this.characterIntervals.push(setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.characterMoveRight();
      }
      if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x) {
        this.characterMoveLeft();
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 100));

    this.characterIntervals.push(setInterval(() => {
      if (this.isDead) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.seconds = 0;
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMP);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALK);
        }
      }
    }, 100));
  }


}