
var coinPositionX
var coinPositionY
var score = 0;
var isMuted = false;




var playState = {

    create: function() { 
        score = 0;
        console.log("Spelet har startat");
        this.cursor = game.input.keyboard.createCursorKeys();
        this.add.image(0, 0, "background")
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 250;


        this.createWorld();
        this.scoreLabel = game.add.text(30, 30, 'Score: 0', {font: '16px Arial', fill: '#ffffff'});
        coinPositionX = Math.floor(Math.random() * 450);
        coinPositionY = Math.floor(Math.random() * 300);
        game.add.sprite(coinPositionX, coinPositionY, 'pixel', 0, this.coin);
    },

    update: function() {
        game.physics.arcade.collide(this.player, this.walls);
		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
        game.physics.arcade.overlap(this.walls, this.coin, this.coinSpawnFailed, null, this);
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

    coinSpawnFailed: function(player, coin) {
		console.log("spawn failed")
        coinPositionX = Math.floor(Math.random() * 450);
        coinPositionY = Math.floor(Math.random() * 300);
        coin.reset(coinPositionX,coinPositionY)
    },

    


	takeCoin: function(player, coin) {

        if(!isMuted){
            this.beef = game.add.audio('beef');
            this.beef.play();
        }

		console.log("GOT COIN")
        coin.reset(1000, 1000);
        coinPositionX = Math.floor(Math.random() * 450);
        coinPositionY = Math.floor(Math.random() * 300);
        coin.reset(coinPositionX,coinPositionY)
        score++
        console.log("score "+ score)
        this.scoreLabel.text = 'Score: ' + score;
        
        

    },



};