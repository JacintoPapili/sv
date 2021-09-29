import Phaser, { GameObjects } from 'phaser'
import GanchoController from './ganchoController';
import RobotController from './robotController';
export default class nivel_1 extends Phaser.Scene {
  
  private robot?:Phaser.Physics.Matter.Sprite
  private ganchos?:Phaser.Physics.Matter.Sprite
  private gancho?
  private peces?:Phaser.Physics.Matter.Sprite[]=[]
  private piso?:Phaser.Physics.Matter.Sprite
  private robotController?:RobotController
  private ganchoController?:GanchoController
  public btnclose:any

  constructor() {
    super('nivel1');
  }

  //https://newdocs.phaser.io/docs/3.55.2/focus/Phaser.GameObjects.DOMElement-setData
  create(){
    this.piso= this.matter.add.sprite(960,990,"piso",undefined,{isStatic:true}).setData("tipo","borde")
    const mapa= this.add.image(960,540,"fondoniv1")
    this.add.image(960, 540, "recuadro")
    
    //caundo tenga pez.setData("puntaje",100)
    this.add.image(960, 40, "barrageneral");
    this.add.image(1000, 49, "barrabasura");
    this.add.image(960, 105, "barravida");

    //paredes invisibles
    var worldWidth = 1920;
    var worldHeight = 1080;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight);
    this.matter.world.setBounds(0,160,1900,0)
   
    // this.matter.world.setBounds(0, 950, 1900, 30)
    //boton
    var GanchoButton = this.add.image(1500, 970,"botongancho")
    .setInteractive()
    .on("pointerdown",() => this.ganchobotn());
    
    //contolador gancho
    this.gancho = this.matter.add.sprite(960, 430, 'ganchopunta',)
    .setFixedRotation()  
    
      
    this.ganchoController = new GanchoController(
       this,
       this.gancho,
    )
    

    //controlador robot
    this.robot = this.matter.add.sprite(960,300, 'personaje',undefined,{isStatic:true}).setFixedRotation()

    this.robotController= new RobotController(
      this,
      this.robot,
      this.gancho
    )

       
  

     


  }

  update(t:number,dt:number){
    this.robotController?.update(dt)
    this.ganchoController?.update(dt)
    //if //se cumple tiempo para tirar pez entonces
   // this.peces.add('', snowman.body as MatterJS.sprite)
		//			break
  }
  private ganchobotn(){
    
    this.btnclose = this.add.image(1500, 970,"botonclose")
    .setInteractive()
    .on("pointerdown",() => this.nada());
    this.gancho.setIgnoreGravity(false)
    

  }
  private nada(){
    //No tocar!! 
  }
  private borrarBtn(){
    this.btnclose.destroy();
    //this.gancho.setVelocityY(-20)
    
    //this.add.image(1500, 970,"botongancho")
    //.setInteractive()
    //.on("pointerdown",() => this.ganchobotn());
  }
}



