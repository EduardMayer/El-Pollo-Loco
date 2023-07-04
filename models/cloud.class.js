class Cloud extends MovebalObject {
  height = 350;
  width = 350;
  y = 0;
  x = 0 + Math.random() * 2700;

  constructor(imagepath) {
    super().loadImage(imagepath);
    this.animate();
  }

  animate() {
    this.objectMoveLeft();
  }
}
