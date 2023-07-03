class BackgroundObject extends MovebalObject {
  height = 480;
  width = 720;
  

  constructor(imagepath, x) {
    super().loadImage(imagepath);
    this.x = x;
    this.y = 480 - this.height;
  }
}
