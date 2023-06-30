class MovebalObject{
    x = 20;
    y = 185;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
           let img = new Image();
           img.src = path;
           this.imageCache[path] = img;
        });
      
    }

    moveRight(){
        console.log('move right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed; // Ändere die Geschwindigkeit nach Bedarf
          }, 1000 / 100); // Ändere das Intervall nach Bedarf
    }

   
}