var LollyMatch={scaleFactor:window.devicePixelRatio/3,safeZone:{width:0,height:0,x:0,y:0},langSelect:"en",font:"CartWheel",fs:10,style:{},style2:{a:{},b:{},c:{}},style3:{},counter:0,counter2:0,isSoundMute:!1,otherSound:[]};LollyMatch.Boot=function(){},LollyMatch.Boot.prototype={preload:function(){this.load.spritesheet("preloadtext","assets/gfx/sprites/loading_text.png",600,100),this.load.spritesheet("preloadBar","assets/gfx/sprites/loading_bar600x100.png",600,100)},create:function(){this.game.canvas.oncontextmenu=function(s){s.preventDefault()},null===localStorage.getItem("LollyMatchSound")?localStorage.setItem("LollyMatchSound",JSON.stringify(LollyMatch.isSoundMute)):LollyMatch.isSoundMute=JSON.parse(localStorage.getItem("LollyMatchSound")),this.sound.mute=LollyMatch.isSoundMute,localStorage.setItem("LollyMatchhint",JSON.stringify(0)),null===localStorage.getItem("LollyMatchhint")?localStorage.setItem("LollyMatchhint",JSON.stringify(LollyMatch.counter2)):LollyMatch.counter2=JSON.parse(localStorage.getItem("LollyMatchhint")),"en"==LollyMatch.langSelect?(LollyMatch.font="CartWheel",LollyMatch.fs=20):"ko"==LollyMatch.langSelect&&(LollyMatch.font="BMDOHYEON",LollyMatch.fs=10),LollyMatch.safeZone.width=this.game.width,LollyMatch.safeZone.height=this.game.height;var s;s=LollyMatch.scaleFactor>.8?1.3:LollyMatch.scaleFactor>.4?1.6:1.9,this.game.height/this.game.width>s?(LollyMatch.safeZone.height=this.game.width*s,LollyMatch.safeZone.y=(this.game.height-LollyMatch.safeZone.height)/2):(LollyMatch.safeZone.width=this.game.height/s,LollyMatch.safeZone.x=(this.game.width-LollyMatch.safeZone.width)/2),LollyMatch.fs=.038*LollyMatch.safeZone.width,LollyMatch.style={font:LollyMatch.fs+12+"px "+LollyMatch.font,fill:"#ffffff",align:"center"},LollyMatch.style2.a={font:LollyMatch.fs+22+"px "+LollyMatch.font,fill:"#F20042",align:"center"},LollyMatch.style2.b={font:LollyMatch.fs+22+"px "+LollyMatch.font,fill:"#cccccc",align:"center"},LollyMatch.style2.c={font:LollyMatch.fs+2+"px "+LollyMatch.font,fill:"#F20042",align:"center"},LollyMatch.style3={font:LollyMatch.fs+"px "+LollyMatch.font,fill:"#ffffff",align:"center"},this.input.maxPointers=1,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.updateLayout(!0),this.stage.forcePortrait=!0,this.scale.setScreenSize=!0,this.input.addPointer(),this.stage.backgroundColor="#71FFC5",console.log("boot complete"),this.state.start("Preloader")}};