class Chicken extends MovebalObject{

    
  
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random()*500;
        this.y = 380;
        this.height = 50;
        this.width = 50;
     }
 

  }