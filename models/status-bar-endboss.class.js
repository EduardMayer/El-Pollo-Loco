class StatusBarEndboss extends DrawableObject {
    IMAGES_BOSS = [
        "img/7_statusbars/2_statusbar_endboss/boss0.png", 
        "img/7_statusbars/2_statusbar_endboss/boss20.png",
        "img/7_statusbars/2_statusbar_endboss/boss40.png",
        "img/7_statusbars/2_statusbar_endboss/boss60.png",
        "img/7_statusbars/2_statusbar_endboss/boss80.png",
        "img/7_statusbars/2_statusbar_endboss/boss100.png",
    ];
    percentage = 100;
    width = 150;
    height= 50;
    x = 550;
    y = 0;
   

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOSS);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        
    }
   
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}