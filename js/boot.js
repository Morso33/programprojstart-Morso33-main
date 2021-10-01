var bootState = {

	preload: function () {
		
	},

	create: function() { 
		// Set a background color and the physic system
		game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log("CURRENT SCENE: BOOT")
		game.state.start('load');

	}
};