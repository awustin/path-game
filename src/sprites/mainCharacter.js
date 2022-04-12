import Phaser from 'phaser';

export default class MainCharacter extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('pacman');
        this.setPosition(x, y);
        this.timer = 0;
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        this.timer++;
        if (this.timer % 25 === 0)
            this.setFrame(1);
        if (this.timer % 50 === 0)
            this.setFrame(0);
    }

}