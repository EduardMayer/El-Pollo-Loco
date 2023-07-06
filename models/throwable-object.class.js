class ThrowableObject extends MovebalObject{
    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.throw();
        this.height = 70;
        this.width = 80;
    }


    throw(){
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 12;
        }, 25);
        
    }
}

