class StatusBar extends DrawableObject {
    IMAGES_HP = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png", 
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
    ];
  

    percentage= 100;
    width = 150;
    height= 50;
    x = 10;
    y = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HP);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HP[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        this.x = 10;
        this.y = 0;
    }


    setPercentageBottle(percentage){
        this.percentage_bottle = percentage;
        this.img = this.imageCache["img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png"];
        this.x = 10;
        this.y = 40;
    }


   
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage> 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}

