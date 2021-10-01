var loadState = {

	preload: function() {		
		console.log("CURRENT SCENE: LOAD")
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);


		
		// Load all assets
		game.load.image("background", "assets/images/bg.png")
		game.load.image("player", "assets/images/player.png")
		game.load.image("enemy", "assets/images/enemy.png")
		game.load.image("wallh", "assets/images/wallh.png")
		game.load.image("wallw", "assets/images/wallv.png")
		game.load.image("pixel", "assets/images/pixel.png")
		//game.load.image("mute", "assets/images/mute.png")
		this.game.load.audio('beef', "assets/images/sound.wav");
		this.game.load.audio('bell', "assets/images/bell.mp3");
		this.game.load.audio('jump', "assets/images/jump.wav");
		// ...
	},

	create: function() { 
		game.state.start('menu');
	}
};