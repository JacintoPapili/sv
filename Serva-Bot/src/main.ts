import Phaser from 'phaser'
import preload from './scenes/preload'
import menu from './scenes/menu'
import galeria from './scenes/galery'
import creditos from './scenes/creditos'
import instrucciones from './scenes/instrucciones'
import Sniv from './scenes/selecniveles'
import nivel_1 from './scenes/nivel1'


const config : Phaser.Types.Core.GameConfig =
{
  type: Phaser.WEBGL,
  scale: 
  {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  physics: 
  {
    default: 'matter',
    matter:
    {
      gravity: { y:0.5 },
      debug: true
    }
  },


  
  scene: [preload, menu,galeria,creditos,instrucciones,Sniv, nivel_1]
};

export default new Phaser.Game(config)