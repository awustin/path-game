import Phaser from 'phaser';
import MainCharacter from './sprites/mainCharacter';
import ClickManager from './classes/clickManager';

export default class PathGame extends Phaser.Scene {
    constructor() {
        super('game');
        this.gridWidth = 10;
        this.gridHeight = 10;
        this.cellSize = 70;
        this.startingPoint = {
            xStart: 100,
            yStart: 800
        }
        this.CLICK_MGER;
    }

    preload() {
        this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x5.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('pacman', 'assets/sprites/pacman28x28.png', { frameWidth: 28, frameHeight: 28 });
        this.CLICK_MGER = new ClickManager(this.game);
    }

    create() {
        const { xStart, yStart } = this.startingPoint;
        const diamondsGroup = this.add.group({
            key: 'diamonds',
            frame: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4],
            frameQuantity: this.gridWidth
        });

        diamondsGroup.getChildren().forEach( item => {
            item.setName(`diamond${Math.random()}`);
            item.setInteractive();
            item.addListener('pointerdown', e => console.log(item.name));
        })

        Phaser.Actions.GridAlign(diamondsGroup.getChildren(), {
            width: this.gridWidth,
            height: this.gridHeight,
            cellWidth: this.cellSize,
            cellHeight: this.cellSize,
            x: 100,
            y: 100
        });

        this.add.existing(new MainCharacter(this, xStart, yStart));
    }

    update() {
        const pos = this.CLICK_MGER.getPosition();
        if(pos) {
        }
    }

}