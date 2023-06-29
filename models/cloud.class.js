class Cloud extends MovebalObject{
    height = 350;
    width = 350;
    y = 0;
  
    constructor(imagepath){
        super().loadImage(imagepath);
        this.x = 0 + Math.random()*500;
        this.animate();
        
     }
 
     animate(){
        setInterval(() => {
            this.x -= 0.15; // Ändere die Geschwindigkeit nach Bedarf
          }, 1000 / 100); // Ändere das Intervall nach Bedarf
     }
  }