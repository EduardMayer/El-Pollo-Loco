class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  height = 100;
  width = 100;
  
  drawFrame(ctx) {
    if (
      this instanceof Chicken ||
      this instanceof Big_Chicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "black";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
  

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  
}
