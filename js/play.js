
var coinPositionX
var coinPositionY
var amountOfCoins = 0;
var maxAmountOfCoins = 10;




var playState = {

    create: function() { 
        console.log("Spelet har startat");
        
        this.cursor = game.input.keyboard.createCursorKeys();
        this.coin = game.add.sprite(30, 30, "pixel");
        this.add.image(0, 0, "background")
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 250;


        this.createWorld();

        this.UpdateCoinPosition();

    },

    update: function() {
        game.physics.arcade.collide(this.player, this.walls);
		game.physics.arcade.collide(this.player, this.coin, this.takeCoin, null, this);
        //game.physics.arcade.collide(this.player, this.coin);

        this.movePlayer();

        if (!this.player.inWorld) {
            this.playerDie();
        }

    },

    movePlayer: function() {
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;
        }
        else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
        }
        else {
            this.player.body.velocity.x = 0;
        }

        if (this.cursor.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -320;
        }
    },

    playerDie: function() {
		amountOfCoins = 0;
        game.state.start('menu');
    },

    createWorld: function() {
        console.log("visa väggen")
        this.walls = game.add.group();
        this.walls.enableBody = true;

        this.coin = game.add.group();
        this.coin.enableBody = true;



        game.add.sprite(0, 0, 'wallh', 0, this.walls);
        game.add.sprite(300, 0, 'wallh', 0, this.walls);
        game.add.sprite(0, 320, 'wallh', 0, this.walls);
        game.add.sprite(300, 320, 'wallh', 0, this.walls);




        var middleTop = game.add.sprite(100, 150, 'wallh', 0, this.walls);
        middleTop.scale.setTo(1.5, 1);
        this.walls.setAll('body.immovable', true);
    },

    

	UpdateCoinPosition: function() {



			console.log(amountOfCoins)
			coinPositionX = Math.floor(Math.random() * 450);
			coinPositionY = Math.floor(Math.random() * 300);
			amountOfCoins++;
            game.add.sprite(coinPositionX, coinPositionY, 'pixel', 0, this.coin);


            
		
	},
	takeCoin: function(player, coin) {
		console.log("called func")
        this.UpdateCoinPosition();
        coin.reset(20,20)
    },



};