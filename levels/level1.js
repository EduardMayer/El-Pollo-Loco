const level1 = new Level(
  
  [
    //new Chicken(),
    //new Chicken(),
    //new Chicken(),
    //new Big_Chicken(),
    //new Big_Chicken(),
    //new Big_Chicken(),
    //new Big_Chicken(),
  ],
  [
    new Cloud("img/5_background/layers/4_clouds/1.png", 100),
    new Cloud("img/5_background/layers/4_clouds/2.png", 500),
    new Cloud("img/5_background/layers/4_clouds/1.png", 900),
    new Cloud("img/5_background/layers/4_clouds/2.png", 1200),
    new Cloud("img/5_background/layers/4_clouds/1.png", 1600),
    new Cloud("img/5_background/layers/4_clouds/2.png", 2000),
    new Cloud("img/5_background/layers/4_clouds/1.png", 2400),
    new Cloud("img/5_background/layers/4_clouds/2.png", 2700),
  ],
  [
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),

    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 1438),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 1438),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 1438),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 1438),

    new BackgroundObject("img/5_background/layers/air.png", 2157),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 2157),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 2157),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 2157),
  ],
  [
    new Coin(250, 150),
    new Coin(450, 300),
    new Coin(650, 200),
    new Coin(850, 150),
    new Coin(1050, 120),
    new Coin(1150, 270),
  ],
  [
    new Bottle(400, 150),
    new Bottle(500, 200),
    new Bottle(850, 350),
    new Bottle(950, 350),
    new Bottle(1100, 300),
    new Bottle(),
  ],
  [
    new Endboss()
  ],
  
);
