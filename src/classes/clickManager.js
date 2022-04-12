import Phaser from 'phaser';

export default class ClickManager {
    constructor(game) {
        this.game = game;
        this.inputMgr = this.game.input;
        this.debounceCount = 0;
    }

    getPosition() {
        if (this.inputMgr.activePointer.leftButtonDown()) {
            this.debounceCount++;

            if (this.debounceCount == 5) {
                const { x, y } = this.inputMgr.activePointer;
                this.debounceCount = 0;
                return {x, y}
            }
        }
    }
}