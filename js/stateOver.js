var StateOver={    
    
   preload:function()
    {
        game.load.spritesheet('buttons', 'images/ui/buttons.png', 264, 74);
    },
    
    create:function()
    {
        //START BUTTON
        this.btnPlayAgain = game.add.button(game.world.centerX, game.world.height - 150, "buttons", this.playAgain, this, 1, 0, 1);
        this.btnPlayAgain.anchor.set(0.5, 0.5);
    },
    playAgain:function()
    {
        game.state.start("StateMain");
    },
    update:function()
    {       
        
    }    
    
}