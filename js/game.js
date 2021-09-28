// Initialize Phaser
var game = new Phaser.Game(500, 350, Phaser.AUTO, 'gameDiv');

console.log("CURRENT SCENE: GAME")

// Define states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start the "boot" state
game.state.start('boot');