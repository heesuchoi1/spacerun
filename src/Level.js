
BasicGame.Level = function (game) {

	this.music = null;
	this.stage1Button = null;
	this.stage2Button = null;
	this.stage3Button = null;
	this.stage4Button = null;
	this.stage5Button = null;

};

BasicGame.Level.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('stageMusic');
		this.music.play();

		this.add.sprite(0, 0, 'stage_Background');

		this.stage1Button = this.add.button(260, 635, 'stage1Button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.stage2Button = this.add.button(825, 516, 'stage2Button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.stage3Button = this.add.button(1430, 551, 'stage3Button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.stage4Button = this.add.button(1167, 300, 'stage4Button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.stage5Button = this.add.button(790, 210, 'stage5Button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
