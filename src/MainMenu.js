
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;
	this.settingsButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();

		this.add.sprite(0, 0, 'mainBackground');
		this.add.sprite(150, 200, 'logo');

		this.playButton = this.add.button(1270, 900, 'playButton', this.startLevel, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.settingsButton = this.add.button(1785, 47, 'settingsButton', this.startSettings, this, 'buttonOver', 'buttonOut', 'buttonOver');

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startLevel: function (pointer) {
		this.music.stop();
		this.state.start('Level');
	},

	startSettings: function (pointer) {
		this.music.stop();
		this.state.start('Settings');
	}

};
