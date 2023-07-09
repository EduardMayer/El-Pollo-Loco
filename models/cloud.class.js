class Cloud extends MovebalObject {
  height = 350;
  width = 350;
  y = 0;
  x;
  speed = 0.05;

  constructor(imagepath, x) {
    super().loadImage(imagepath);
    this.animate();
    this.x = x;
  }

  animate() {
    this.objectMoveLeft();
  }
}
