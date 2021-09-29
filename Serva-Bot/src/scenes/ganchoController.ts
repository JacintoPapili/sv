import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import RobotController from './robotController'
import StateMachine from '../statemachine/StateMachine'

export default class GanchoController {

	private scene: Phaser.Scene
	private sprite: Phaser.Physics.Matter.Sprite	
	private stateMachine: StateMachine
	private boton: any
	//	private stateMachine: StateMachine
	private health = 100


	constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Matter.Sprite) {		
		/* cuando lo creamos lo hacemos asi:

		this.playerController = new PlayerController(
			this, 
			this.penquin,
			this.cursors,
			this.obstacles
		)
			
		// this hace referencia a la escena

		*/
		

		this.scene = scene
		this.sprite = sprite
		this.stateMachine = new StateMachine(this, 'grip')

		this.createAnimations()
		this.stateMachine.addState("arriba",{
			onEnter: this.arribaOnEnter,
		})

		
		this.stateMachine.addState('abierto', {
			onEnter: this.abiertoOnEnter,
		})

		.addState('cerrado', {
			onEnter: this.cerradoOnEnter,
		})
		.setState("arriba")
		
		this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
			const body = data.bodyB as MatterJS.BodyType

			const gameObject = body.gameObject
			if (!gameObject)
			{
				return
			}
			if (gameObject instanceof Phaser.Physics.Matter.Sprite)
			{
		    	if (body){
					alert("hola")
					this.sprite.setVelocityY(-20)
				} 
				// va al gancho
				//if (gameObject.getData("tipo")=="pez"){

				//	this.puntaje+=gameObject.getData("puntaje")
					
				//		} 
				
			}
//asociacion composicion 
			


			
		})

		
		
	}

	update(dt: number)
	{
		this.stateMachine.update(dt)
	}

	private arribaOnEnter(){
		this.sprite.setIgnoreGravity(true)
	}	
	

	private abiertoOnEnter()
	{
		this.sprite.play('grip-open')
	}

	private cerradoOnEnter()
	{
		this.sprite.play('grip-close')
	}
	
	private createAnimations()
	{
		this.sprite.anims.create({
			key: 'grip-open',
			frames: [{ key: 'ganchopunta'}]
		})

		this.sprite.anims.create({
			key: 'grip-close',
			frames: [{ key: 'ganchocerrado'}]
		})
	}
	

	
private concentrado(){
	events.emit("bajando")
}
	

		

		
	
	
}