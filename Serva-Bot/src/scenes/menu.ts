import Phaser from 'phaser'
export default class menu extends Phaser.Scene {

  constructor() {
    super('inicio');
  }
  
  create() {
   //this.setNivel()

    var fondo=this.add.image(960, 540,"fondomenu");
    var logo=this.add.image(1200, 500,"logo");
    this.add.image(100, 530,"extensionesbot");

    //boton de jugar
    var botonjugar=this.add.image(400,300,"botonJugar")
    botonjugar.setInteractive()
    botonjugar.on('pointerdown', () => this.scene.start('seleccion'))
    
    //boton de intruc
    var botonins=this.add.image(400,550,"botonInstrucciones")
    botonins.setInteractive()
    botonins.on('pointerdown', () => this.scene.start('instrucciones'))
   
    //boton de galer
    var botonCreditos=this.add.image(400,785,"galery")
    botonCreditos.setInteractive()
    botonCreditos.on('pointerdown', () => this.scene.start('galery'))

    //boton creditos
    var botonCreditos=this.add.image(1860,1020,"creditosmenu")
    botonCreditos.setInteractive()
    botonCreditos.on('pointerdown', () => this.scene.start('creditos'))

    //boton settings
    var botonCreditos=this.add.image(1860,60,"settingsmenu")
    botonCreditos.setInteractive()
    botonCreditos.on('pointerdown', () => this.scene.start(''))
    
  }

  //setNivel(){
   // local storage
		//unlockLVL = parseInt(localStorage.getItem('NivUnl')|| 0)
  //  }
}
