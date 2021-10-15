import Phaser from 'phaser'
let platforms;
let player;
let stars;

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create() {
  //world
  this.add.image(400, 300, 'sky');
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');
  
  //sprite
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
  });
  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });
  player.body.setGravityY(500);
  this.physics.add.collider(player, platforms);
  
  //stars
  stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
  });
  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });
  this.physics.add.collider(stars, platforms);
  
  this.physics.add.overlap(player, stars, (player,star) => star.disableBody(true, true) , null, this);
}

function update() {
  //controls
  let cursors = this.input.keyboard.createCursorKeys();
  
  if (cursors.up.isDown && player.body.touching.down)
  {
      player.setVelocityY(-550);
  }
  if (cursors.left.isDown)
  {
      player.setVelocityX(-600);
  
      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(600);
  
      player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);
  
      player.anims.play('turn');
  }
}

const config = {
  type: Phaser.AUTO,
  height: 600,
  width: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)