


var bool = false;
var menuState = {

	preload: function () {
		console.log("CURRENT SCENE: MENU")
	},

	create: function() { 

		// Name of the game
		// todo ändra labeln inte satanistiska svärdomar
		var nameLabel = game.add.text(game.world.centerX, 80, 'Welcome', { font: '50px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

		// How to start the game
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);	

		if (bool == true){

		game.state.start('play');	
		this.start
		}

	},
	



	update: function() {

		if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
		{
			console.log("UP")
			bool = true;
		}

		if (bool == true){
			bool = false;
			game.state.start('play');	
			this.start
			}



	},


	
};


