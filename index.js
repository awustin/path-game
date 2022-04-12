var $aBfVD$phaser = require("phaser");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



class $20bf10a05ecd1fa0$export$2e2bcd8739ae039 extends ($parcel$interopDefault($aBfVD$phaser)).GameObjects.Sprite {
    constructor(scene, x, y){
        super(scene, x, y);
        this.setTexture('pacman');
        this.setPosition(x, y);
        this.timer = 0;
    }
    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        this.timer++;
        if (this.timer % 25 === 0) this.setFrame(1);
        if (this.timer % 50 === 0) this.setFrame(0);
    }
}


class $accb3367565ded53$export$2e2bcd8739ae039 extends ($parcel$interopDefault($aBfVD$phaser)).Scene {
    constructor(){
        super('game');
        this.gridWidth = 5;
        this.gridHeight = 5;
        this.cellSize = 70;
        this.startingPoint = {
            xStart: 100,
            yStart: 800
        };
    }
    preload() {
        this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x5.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('pacman', 'assets/sprites/pacman28x28.png', {
            frameWidth: 28,
            frameHeight: 28
        });
    }
    create() {
        const { xStart: xStart , yStart: yStart  } = this.startingPoint;
        const group = this.add.group({
            key: 'diamonds',
            frame: [
                0,
                1,
                2,
                3,
                4
            ],
            frameQuantity: this.gridWidth
        });
        ($parcel$interopDefault($aBfVD$phaser)).Actions.GridAlign(group.getChildren(), {
            width: this.gridWidth,
            height: this.gridHeight,
            cellWidth: this.cellSize,
            cellHeight: this.cellSize,
            x: 100,
            y: 100
        });
        this.add.existing(new $20bf10a05ecd1fa0$export$2e2bcd8739ae039(this, xStart, yStart));
    }
}


class $d9cd37188dce1731$var$Boot extends ($parcel$interopDefault($aBfVD$phaser)).Scene {
    constructor(){
        super('boot');
    }
    create() {
        this.scene.start('game');
    }
}
const $d9cd37188dce1731$var$config = {
    type: ($parcel$interopDefault($aBfVD$phaser)).AUTO,
    height: 840,
    width: 840,
    scene: [
        $d9cd37188dce1731$var$Boot,
        $accb3367565ded53$export$2e2bcd8739ae039
    ]
};
const $d9cd37188dce1731$var$game = new ($parcel$interopDefault($aBfVD$phaser)).Game($d9cd37188dce1731$var$config);


//# sourceMappingURL=index.js.map
