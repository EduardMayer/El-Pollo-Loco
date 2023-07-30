let level1;

function levelInit() {
  level1 = new Level(
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Big_Chicken(400),
      new Big_Chicken(800),
      new Big_Chicken(1200),
      new Chicken(),
      new Chicken(),
      new Big_Chicken(1600),
      new Big_Chicken(1800),
      new Big_Chicken(2000),
      new Big_Chicken(2200),
      new Chicken(),
      new Chicken(),
      
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
      new Cloud("img/5_background/layers/4_clouds/2.png", 3100),
      new Cloud("img/5_background/layers/4_clouds/2.png", 3400),
    ],
    [
      new BackgroundObject("img/5_background/layers/air.png", -719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png",-719),
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
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png",1438),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 1438),

      new BackgroundObject("img/5_background/layers/air.png", 2157),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 2157),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png",2157),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 2157),

      new BackgroundObject("img/5_background/layers/air.png", 2876),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 2876),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png",2876),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 2876),
    ],
    [
      new Coin(250, 150),
      new Coin(550, 300),
      new Coin(850, 200),
      new Coin(1150, 150),
      new Coin(1450, 120),
      new Coin(1750, 270),
      new Coin(2050, 300),
    ],
    [
      new Bottle(400, 150),
      new Bottle(500, 200),
      new Bottle(850, 320),
      new Bottle(950, 320),
      new Bottle(1100, 120),
      new Bottle(1400, 350),
      new Bottle(1700, 200),
      new Bottle(2100, 120),
    ],
    [
      new Endboss(2700, 60),
    ],
  );
}
