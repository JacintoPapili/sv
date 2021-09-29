import Phaser from 'phaser'
export default class preload extends Phaser.Scene {

  constructor() {
    super('preload');
  }

  preload(){
    this.load.image("botonclose","assets/Sprites/Interface/Buttons/gripper_close.png");
    this.load.image("fondomenu", "assets/Sprites/Backgrounds/background_menus.png");
    this.load.image("logo", "assets/Sprites/Logo/logo.png");
    this.load.image("botonInstrucciones","assets/Sprites/Interface/Buttons/instructions.png");
    this.load.image("botonJugar","assets/Sprites/Interface/Buttons/Play.png");
    this.load.image("creditosmenu","assets/Sprites/Interface/Buttons/credits_v1.png");
    this.load.image("settingsmenu","assets/Sprites/Interface/Buttons/settings.png");
    this.load.image("creditos","assets/Sprites/Interface/PopUps/credits.png");
    this.load.image("niveles","assets/Sprites/Interface/PopUps/levels.png");
    this.load.image("volver","assets/Sprites/Interface/Buttons/back.png");
    this.load.image("niv1","assets/Sprites/Interface/Buttons/level_1.png");
    this.load.image("niv2","assets/Sprites/Interface/Buttons/level_2.png");
    this.load.image("niv3","assets/Sprites/Interface/Buttons/level_3.png");
    this.load.image("galery","assets/Sprites/Interface/Buttons/gallery.png");
    this.load.image("pausa","assets/Sprites/Interface/Buttons/pause.png");
    this.load.image("nivelblock","assets/Sprites/Interface/Buttons/level_blocked.png");
    this.load.image("mutear","assets/Sprites/Interface/Buttons/sound_mute_v2.png");
    this.load.image("desmutear","assets/Sprites/Interface/Buttons/sound_unmute_v2.png");
    this.load.image("fondoniv1", "assets/Sprites/Backgrounds/background_1.png");
    this.load.image("barrageneral","assets/Sprites/Interface/Bars/general.png" )
    this.load.image("barrabasura","assets/Sprites/Interface/Bars/cuota_up.png" )
    this.load.image("barravida","assets/Sprites/Interface/Bars/life_up.png" )
    this.load.image("recuadro","assets/Sprites/Interface/Extras/Frame.png" )
    this.load.image("extensionesbot","assets/Sprites/Interface/Extras/frame_extension.png" )
    this.load.image("ganchopunta","assets/Sprites/Serva/grippers_open.png")
    this.load.image("ganchocerrado", "assets/Sprite/Serva/grippers_close")
    this.load.image("personaje","assets/Sprites/Serva/body_happy.png")
    this.load.image("personajetriste","assets/Sprites/Serva/body_sad.png")
    this.load.image("personajeconc","assets/Sprites/Serva/body_concentrated.png")
    this.load.image("personajebien","assets/Sprites/Serva/body_goodg.png")
    this.load.image("personajemal","assets/Sprites/Serva/body_bad.png")
    this.load.image("botongancho","assets/Sprites/Interface/Buttons/gripper.png");
    this.load.image("pez1","assets/Sprites/Fishes/pirana.png");
    this.load.image("botella","assets/Sprites/Trash/trash_1.png");
    this.load.image("piso","assets/Sprites/Backgrounds/piso.png")
    this.load.spritesheet('personaje', 'assets/Sprites/Serva/´spritessheet.png', { frameWidth: 800, frameHeight: 150 });
  }

  create(){
    this.scene.start("inicio");
  }

}