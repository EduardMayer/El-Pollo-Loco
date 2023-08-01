/**
 * Represents a game level containing various game elements.
 * @class Level
 */
class Level {
    /**
     * The end boss of the level.
     * @type {Endboss}
     */
    endboss;
  
    /**
     * An array of bottles in the level.
     * @type {Array<Bottle>}
     */
    bottles;
  
    /**
     * An array of coins in the level.
     * @type {Array<Coin>}
     */
    coins;
  
    /**
     * An array of enemies in the level.
     * @type {Array<Enemy>}
     */
    enemies;
  
    /**
     * An array of clouds in the level.
     * @type {Array<Cloud>}
     */
    clouds;
  
    /**
     * An array of background objects in the level.
     * @type {Array<BackgroundObject>}
     */
    backgroundObjects;
  
    /**
     * The x-coordinate where the level ends.
     * @type {number}
     * @default 2750
     */
    level_end_x = 2750;
  
    /**
     * The x-coordinate where the level starts.
     * @type {number}
     * @default 10
     */
    level_start_x = 10;
  
    /**
     * Create a new Level instance.
     * @constructor
     * @param {Array<Enemy>} enemies - An array of enemies in the level.
     * @param {Array<Cloud>} clouds - An array of clouds in the level.
     * @param {Array<BackgroundObject>} backgroundObjects - An array of background objects in the level.
     * @param {Array<Coin>} coins - An array of coins in the level.
     * @param {Array<Bottle>} bottles - An array of bottles in the level.
     * @param {Endboss} endboss - The end boss of the level.
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottles, endboss) {
      this.endboss = endboss;
      this.bottles = bottles;
      this.coins = coins;
      this.enemies = enemies;
      this.clouds = clouds;
      this.backgroundObjects = backgroundObjects;
    }
  }
  