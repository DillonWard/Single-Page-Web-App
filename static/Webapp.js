var canvas = document.getElementById("canvasOne");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255, 0, 0)";
canvas.width = 800;
canvas.height = 650; 
var cont = 1;
var rect = [];
var score = 0;
var check = 0;
var lives = 3;
var paddle;
var name;
var restart = 0;

var ball = {
    // Dimensions and velocity for the ball
    r: 25,
    vx: 5,
    vy: 5,
    x: 200,
    y: 400,

    draw: function(){
        ctx.beginPath(); // initialize the circle
        ctx.fillStyle = "#F44336"; // the color of the circle
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.stroke(); // draw the outline
        ctx.fill(); // fill with color
    },
    
    // if the ball hits the canvas it will bounce back
   move: function(){
        // if the ball hits the wall, the velocity is either up or down
        // depending on where the ball is
        
       if(this.y > canvas.height - this.r || this.y < this.r){ 
            this.vy = -this.vy; // if ball hits the canvas it will go the other way
        }
        
       this.y += this.vy;// increasing the velocity/y-position

       if(this.x > canvas.width - this.r || this.x < this.r){
            this.vx = -this.vx; // if ball hits the canvas it will go the other way
        } 
        
       this.x += this.vx;// increasing the velocity/x-position       
   }   
}

// controller for the lives
function livesCont(){
    document.getElementById('lives').innerHTML = lives; // displaying the lives to the canvas
    
    if(ball.y > canvas.height - ball.r){
           lives -= 1;
           console.log("Lives left: " + lives);
       } // decrements lives if the ball hits the bottom of the canvas
    
    if(lives === 0){
        clear();
    }
}

// for displaying the score
function scoreCont(){
    document.getElementById('score').innerHTML = score; // displays the score to the canvas
    $('#score').val(score);
} // allows the score to be visible and stored

function Paddle (){
    
    this.w = 150;
    this.h = 30;
    this.x = 300;
    this.y = 550;
    
    this.drawPaddle = function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle="#F44336";
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'grey';
        ctx.stroke();        
    };
    
    this.move = function(){ // prevent the paddle moving off the canvas
        if(this.x > canvas.width - this.w){
            console.log(this.x, canvas.width);
            this.x -= 25;
        }
        
        else if(this.x < 0){
         this.x += 25;   
        }

    };
    
     // check if the ball is colliding with the squares
    this.colliding = function(ball){
        
        var distX = Math.abs(ball.x - this.x - this.w / 2); // x distance between the ball and blocks
        var distY = Math.abs(ball.y - this.y - this.h / 2); // y distance between the ball and blocks
        
        if(distX > (this.w / 2 + ball.r)){
            return false;
        }
        
        if(distY > (this.h / 2 + ball.r)){
            return false;
        }
        
        if(distX <= (this.w / 2 + ball.r)){
            return true;
        }
        
        if(distY <= (this.w / 2 + ball.r)){
            return true;
        }
        // checks if they are colliding
        
        var dx = distX - this.w / 2;
        var dy = distY - this.h / 2;
        return (Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(ball.r, 2));
    };
    
}
    
function init(){ // for drawing the blocks to hit    
    for(var i = 1; i <= 6; i++){
        rect[i] = new Rectangle(((100 * i) + 10), 25);
        rect[i].drawBlock();     
    }
    
    paddle = new Paddle();
}
    
 // function for the blocks
function Rectangle(xpos, ypos){
    
    this.w = 75;
    this.h = 20;
    this.x = xpos;
    this.y = ypos;
    this.active = true;
    // parameters of the blocks
    
    this.drawBlock = function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle="#F44336";
        ctx.fill();
    }; // draws the blocks
    
    // check if the ball is colliding with the squares
    this.colliding = function(ball){
        var distX = Math.abs(ball.x - this.x - this.w / 2); // x distance between the ball and blocks
        var distY = Math.abs(ball.y - this.y - this.h / 2); // y distance between the ball and blocks
        
        if(distX > (this.w / 2 + ball.r)){
            return false;
        }
        
        if(distY > (this.h / 2 + ball.r)){
            return false;
        }
        
        if(distX <= (this.w / 2 + ball.r)){
            return true;
        }
        
        if(distY <= (this.w / 2 + ball.r)){
            return true;
        }
        // checks if they are colliding
        
        var dx = distX - this.w / 2;
        var dy = distY - this.h / 2;
        return (Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(ball.r, 2));
    };
    
    this.delete = function(){
        this.active = false;
        console.log("Deleted!")
        score += 25;
        console.log(score);
    }; // if they collide, delete the block
    
}

function storeName(){ // stores the name
    if(cont == 6 || lives == 0){
        name = document.getElementById("pname");
        console.log("Player Name - " + name); 
        
    }
}

canvas.addEventListener("click", function(event) { // Event listener for when the canvas is clicked
    console.log("Click"); // logs "Click" to check if the canvas has been clicked
    cont = 2;
});

// Add a Javascript event listener to the keypress event.
window.addEventListener("keypress", function(event) { 
    // Just log the event to the console.
    console.log(event);
});

//keypresses with jQuery
$(document.body).on('keydown', function(e) {
    console.log(e.which);
    switch (e.which) {
    // key code for left arrow
    case 37:
        console.log('Left arrow key pressed!');
        paddle.x -= 50; 
        break;

    // key code for right arrow
    case 39:
        console.log('Right arrow key pressed!');
        paddle.x += 50;
        break;
    }    
});

// function for clearing the canvas
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.x = 10;
        ball.y = 10;
}

function reset(){ // function to restart the game
    ball.x = 200;
    ball.y = 400;
    score = 0;
    check = 0;
    lives = 3;
    restart = 1;
    cont = 1;
    vx = 5;
    vy = 5;
    
    console.log("Restarted")
    
    if(restart === 1){
        livesCont();
        scoreCont();
        Paddle();
        init();
        Rectangle();
        storeName();
        paddle.drawPaddle();
        paddle.move();
    }
}

// function to get the animation going
function repeatme(){
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // if the controller for click is 2, the ball is drawn and starts moving
    if(cont == 2){
        ball.draw();
        ball.move();
    }
    
    // moves the ball off the objects
    if(paddle.colliding(ball)){
        console.log("Paddle x ball collision");
        ball.xy = -ball.xy;
        ball.vy = -ball.vy;
    }

    // moves the ball off the objects
    for (var i = 1; i <= rect.length-1; i++){
        if(rect[i].colliding(ball)){
            ball.xy = -ball.xy;
            ball.vy = -ball.vy;
            
            console.log("Collision detected!");
            rect[i].delete(); // removes the rectangle
            rect.splice(i, 1); // deletes the object
            check += 1;
        }
        else {
            rect[i].drawBlock();
        }  
    }
    
    if(check === 6){
        clear();
        
    }
    
    paddle.drawPaddle();
    paddle.move();
    livesCont();
    scoreCont();
    window.requestAnimationFrame(repeatme);
}
init();
repeatme();
