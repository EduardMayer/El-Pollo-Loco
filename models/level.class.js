class Level  {
    endboss;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 1750;
    level_start_x = 10;

    constructor(enemies , clouds, backgroundObjects, endboss){
        this.endboss = endboss;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects; 
    }
  }