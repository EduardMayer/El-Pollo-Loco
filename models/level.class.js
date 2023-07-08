class Level  {
    endboss;
    bottles;
    coins;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 1750;
    level_start_x = 10;

    constructor(enemies , clouds, backgroundObjects, coins, bottles, endboss){
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects; 
    }
  }