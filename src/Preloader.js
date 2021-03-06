
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');	
		this.preloadBar = this.add.sprite(680, 510, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, the lines below won't work as the files themselves will 404, they are just an example of use.
		this.load.image('mainBackground', 'images/main_background.png');
		this.load.image('logo', 'images/logo.png');
		this.load.image('playButton', 'images/play_button.png');
		this.load.image('settingsButton', 'images/settings_button.png');

		this.load.image('settingBackground', 'images/setting_background.png');
		this.load.image('setting1Button', 'images/setting1.png');
		this.load.image('setting2Button', 'images/setting2.png');
		this.load.image('MainMenuButton', 'images/MainMenu.png');

		this.load.image('levelBackground', 'images/stage_background.png');
		this.load.image('stage1Button', 'images/planet1.png');
		this.load.image('stage2Button', 'images/planet2.png');
		this.load.image('stage3Button', 'images/planet3.png');
		this.load.image('stage4Button', 'images/planet4.png');
		this.load.image('stage5Button', 'images/planet5.png');

		this.load.audio('titleMusic', ['audio/main_menu.wav']);
		this.load.audio('stageMusic', ['audio/stage.wav']);

		//	+ lots of other required assets here

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.cache.isSoundDecoded('stageMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
