import Phaser from 'phaser'
import StateMachine from '../statemachine/StateMachine'
import { sharedInstance as events } from './EventCenter'
import GanchoController from './ganchoController'


export default class RobotController {

	private scene: Phaser.Scene
	private sprite: Phaser.Physics.Matter.Sprite
	private gancho?: GanchoController

	private stateMachine: StateMachine
	private health = 100


	constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Matter.Sprite,  gancho: GanchoController) {		
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
		
		this.gancho = gancho

		this.createAnimations()

		this.stateMachine = new StateMachine(this, 'player')

		// se define la maquina de estados:
		// que estados la componen
		// Pero ademas, que hacen 
		//  -> antes de entrar al estado: onEnter
		//  -> mientras estan en el estado: onUpdate
		//  -> cuando dejan el estado: onExit

		// Puedo no tener ninguno, los 3, o alguno de ellos.

		this.stateMachine.addState('feliz', {
			onEnter: this.felizOnEnter,
		})
		.addState('triste', {
			onEnter: this.tristeOnEnter,
		})
		.addState('concentrado', {
			onEnter: this.concentradoOnEnter,
		})
		.addState('bien', {
			onEnter: this.bienOnEnter
		})
		.addState('mal', {
			onEnter: this.malOnEnter
		})

		// la magia de MATTER!
		// permite generar un solo evento para colliders
		// luego lo llama y analiza con que se choco!*

		this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
			const body = data.bodyB as MatterJS.BodyType

			const gameObject = body.gameObject
			if (!gameObject)
			{
				return
			}
			if (gameObject instanceof Phaser.Physics.Matter.Sprite)
			{
		    	if (gameObject.getData("tipo") == "borde",body){

					this.stateMachine.setState("concentrado")
					
					
				} 
				// va al gancho
				//if (gameObject.getData("tipo")=="pez"){

				//	this.puntaje+=gameObject.getData("puntaje")
					
				//		} 
				
			}

			

			

			

			
			
		})
		events.on("bajando",this.concentradoOnEnter,this)
	}

	update(dt: number)
	{
		this.stateMachine.update(dt)
	}

	private felizOnEnter()
	{
		this.sprite.play('player-feliz')
	}


	private tristeOnEnter()
	{
		this.sprite.play('player-triste')
	}



	// private walkOnUpdate()
	// {
	// 	const speed = 5

	// 	if (this.cursors.left.isDown)
	// 	{
	// 		this.sprite.flipX = true
	// 		this.sprite.setVelocityX(-speed)
	// 	}
	// 	else if (this.cursors.right.isDown)
	// 	{
	// 		this.sprite.flipX = false
	// 		this.sprite.setVelocityX(speed)
	// 	}
	// 	else
	// 	{
	// 		this.sprite.setVelocityX(0)
	// 		this.stateMachine.setState('idle')
	// 	}

	// 	const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)
	// 	if (spaceJustPressed)
	// 	{
	// 		this.stateMachine.setState('jump')
	// 	}
	// }

	// private walkOnExit()
	// {
	// 	this.sprite.stop()
	// }

	private concentradoOnEnter()
	{
		this.sprite.play('player-concentrado')
	}

	private bienOnEnter()
	{
		this.sprite.play('player-bien')
	}

	private malOnEnter()
	{
		this.sprite.play('player-mal')
	}


	// private deadOnEnter()
	// {
	// 	this.sprite.play('player-death')

	// 	//si el personaje muere, se sacan las colisiones		
	// 	this.sprite.setOnCollide(() => {})

	// 	this.scene.time.delayedCall(1500, () => {
	// 		this.scene.scene.start('game-over')
	// 	})
	// }

	private createAnimations()
	{
		this.sprite.anims.create({
			key: 'player-feliz',
			frames: [{ key: 'personaje'}]
		})

		this.sprite.anims.create({
			key: 'player-triste',
			frames: [{ key: 'personajetriste'}]
		})

		this.sprite.anims.create({
			key: 'player-concentrado',
			frames: [{ key: 'personajeconc'}]
		})

		this.sprite.anims.create({
			key: 'player-bien',
			frames: [{ key: 'personajebien'}]
		})

		this.sprite.anims.create({
			key: 'player-mal',
			frames: [{ key: 'personajemal'}]
		})
		
	}
}
