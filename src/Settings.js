
BasicGame.Settings = function (game) {

	this.music = null;
	this.setting1Button = null;
	this.setting1Button = null;


};

BasicGame.Settings.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		//this.music = this.add.audio('settingMusic');
		//this.music.play();

		this.add.sprite(0, 0, 'settingBackground');

		this.setting1Button = this.add.button(200, 450, 'setting1Button', this.settings, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.setting2Button = this.add.button(200, 700, 'setting2Button', this.settings, this, 'buttonOver', 'buttonOut', 'buttonOver');
		this.MainMenuButton = this.add.button(1785, 47, 'MainMenuButton', this.startMainMenu, this, 'buttonOver', 'buttonOut', 'buttonOver');
	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
