import Phaser from 'phaser';
import PathGame from './pathGame';

class Boot extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  create() {
    this.scene.start('game');
  }
}

const config = {
  type: Phaser.AUTO,
  height: 840,
  width: 840,
  scene: [Boot, PathGame]
}

const game = new Phaser.Game(config);