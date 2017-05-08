LollyMatch.Preloader=function(){this.preloadBack=null,this.preloadBar=null,this.preloadText=null,this.ready=!1,this.a=!0},LollyMatch.Preloader.prototype={preload:function(){this.preloadBack=this.add.sprite(this.world.centerX,this.world.centerY,"preloadBar",0),this.preloadBar=this.add.sprite(this.world.centerX,this.world.centerY,"preloadBar",1),this.preloadBack.x=this.world.centerX-this.preloadBar.width/2,this.preloadBack.anchor.setTo(0,.5),this.preloadBar.x=this.world.centerX-this.preloadBar.width/2,this.preloadBar.anchor.setTo(0,.5),this.load.setPreloadSprite(this.preloadBar),this.a=this.cache.checkImageKey("preloadtext"),this.a&&(this.preloadText=this.add.sprite(this.world.centerX,this.world.centerY-this.preloadBack.height,"preloadtext",0),this.preloadText.anchor.setTo(.5),this.preloadText.scale.setTo(.6),this.preloadText.animations.add("loading",[0,1,2],2,!0),this.preloadText.play("loading")),this.load.script("WebFont","libs/webfontloader.js"),this.load.json("mylangs","lang/languages.json"),this.loadFonts(),this.load.image("titleImage","assets/gfx/temp_title.png"),this.load.image("background","assets/gfx/background_tile.png"),this.load.video("hintV","assets/gfx/lolly_hint.mp4"),this.load.spritesheet("sunM","assets/gfx/sprites/sunM.300x300.png",300,300),this.load.spritesheet("lolly","assets/gfx/sprites/lolly192.png",192,192),this.load.spritesheet("bubble","assets/gfx/sprites/bubble192.png",192,192),this.load.spritesheet("body","assets/gfx/sprites/body2_192x182.2.png",192,182.2),this.load.spritesheet("face","assets/gfx/sprites/face192x182.2.png",192,182.2),this.load.spritesheet("arrows","assets/gfx/sprites/lolly_arrows.png",630,630),this.load.spritesheet("drop","assets/gfx/sprites/drop64x96.png",64,96),this.load.spritesheet("brick","assets/gfx/sprites/brick300x270.png",300,270),this.load.spritesheet("backSymb","assets/gfx/sprites/back_symb128x128.png",128,128),this.load.spritesheet("uiBig","assets/gfx/sprites/ui_big192x192.png",192,192),this.load.spritesheet("uiSmall","assets/gfx/sprites/ui_small_fix128x128.png",128,128),this.load.image("ui_back","assets/gfx/ui_back.png"),this.load.image("hint_back","assets/gfx/hint_back.png"),this.load.audio("pick1","assets/sfx/pick1.mp3","assets/sfx/pick1.ogg"),this.load.audio("pick3","assets/sfx/pick3.mp3","assets/sfx/pick3.ogg"),this.load.audio("pick2","assets/sfx/pick2.mp3","assets/sfx/pick2.ogg"),this.load.audio("drop1","assets/sfx/drop1.mp3","assets/sfx/drop1.ogg"),this.load.audio("drop2","assets/sfx/drop2.mp3","assets/sfx/drop2.ogg"),this.load.audio("switch","assets/sfx/button_click_007.mp3","assets/sfx/button_click_007.ogg"),this.load.audio("reload","assets/sfx/reload.mp3","assets/sfx/reload.mp3"),this.load.audio("revive","assets/sfx/tinyFrog.mp3","assets/sfx/tinyFrog.mp3"),this.load.audio("switch2","assets/sfx/switch10.mp3","assets/sfx/switch10.wav"),this.load.audio("rainbows",["assets/sfx/loop/Rainbows.mp3","assets/sfx/loop/Rainbows.ogg"])},loadFonts:function(){WebFontConfig={custom:{families:["CartWheel","BMDOHYEON"],urls:["lang/style/fonts.css"]}}},create:function(){this.preloadBar.cropEnable=!1},update:function(){this.cache.isSoundDecoded("rainbows")&&this.ready===!1&&(this.ready=!0,this.a&&(this.preloadText.animations.stop(null,!0),this.preloadText.frame=3),console.log("Preload Complete"),this.state.start("StartMenu"))}};