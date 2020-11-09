let player;
let blocks = [];
let ball;

function setup() {    

    mode = 0;

    // Creates window
   createCanvas(900,600);
 
   player = new Player();
   
   // Fills array of blocks
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
            blocks.push(new Block(j*80,i*40));                  
        }
        
    }
 
    ball = new Ball();
}

function draw() {

    // Start screen
    if (mode == 0) {
       textSize(30);       
 
      text("press ENTER to start ", width/2, height/2)
    }

    if (mode == 1) {

        background(0); // Black background


    player.move(); // Move method is called for the player
    player.show(); // Player is displayed
    ball.move(); // Move method is called for the ball

    if (ball.yposition > height) { startNewGame();} // If ball goes under player's rectangle game's over

    
    for (let i = 0; i < blocks.length; i++) {

        blocks[i].show(); // Calls each block in "blocks" and displays it 
        
        // Checks if the ball hits a block
        if (ball.collision(blocks[i])) {
            ball.verticalVelocity = -ball.verticalVelocity; // The ball rebounds and goes back down
            blocks.splice(i,1); // Removes block from array 
        }
        
    }

    if (blocks == undefined || blocks.length < 1) { WinMode()} // If there are no more blocks left game's over



    // Checks if the ball hits a the player's rectangle
    if (ball.collision(player)) {
        ball.verticalVelocity = -ball.verticalVelocity; // The ball rebounds and goes back up
    }

    // Checks if the ball hits top of the screen
    if (ball.yposition < 0) {
        ball.verticalVelocity = -ball.verticalVelocity; // The ball rebounds and goes back down
    }

    ball.show(); // Displays the ball 

    }
    
}

// Handles winning
function WinMode() {   
    mode = 0;
    alert("Congratulations, you won!!")
    window.location.reload();
}

// Handles lost
function startNewGame() {   
       mode = 0;
        alert("You lost, try again!")
        window.location.reload();
}

// Start screen
function keyPressed() {
    if (keyCode === ENTER) {
      mode = 1;
    }
  }
