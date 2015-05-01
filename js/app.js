// Enemies our player must avoid
var Enemy = function (RowCount) 
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
// Update the enemy's position, required method for game
    // calculate method for bug movement
    this.sprite ='images/enemy-bug.png';
    this.x =0; 
    this.y = RowCount * 88 + 60;
  
    if (RowCount === 2) {
        this.sprite = 'images/enemy-bug.png';
        this.x = 100;
        this.y = RowCount * 88 + 60;
    }
   if (RowCount === 3) {
        this.sprite = 'images/enemy-bug.png';
        this.x = 300;
        this.y = RowCount * 88 + 60;
   }
    this.speed = 10 + Math.random() * 10;
    return this;
};
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt * 10;
    if (this.x > 500) {
        this.x = 0; }
     return;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.getspeed = function(){
var random = Math.random() + .05;
if (Math.floor(random)< 1)
   { 
return 3.5;
 }
else
{ 
return 12;
}

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 360;
    this.y = 320;
    this.sprite = 'images/char-pink-girl.png';
}
Player.prototype.update = function(){

 if (this.collide()=== true){
  this.playerreset();
}  

   else if (this.x<30) {
        this.x =30;
    }
    else if (this.x>400){
        this.x =400;
   }
    else if (this.y < 30 ) {
       this.y =30;
    }
    else if (this.y >410) {
      this.y =410;
   }
    // Player reset to starting position if it goes off of the Canvas
    else if ( this.y < 35 && this.x < 505) {
        this.playerreset();
      }  
};

Player.prototype.render = function () {
    ctx.drawImage (Resources.get (this.sprite), this.x, this.y);
} ; 
Player.prototype.handleInput= function (key) {
    switch (key){
        case 'left':
        this.x = this.x - 40;
        break;
        case 'right':
         this.x = this.x + 40;
         break;
         case 'up':
         this.y = this.y - 40;
         break;
         case 'down':
         this.y = this.y + 40;
         break;
    }
};

Player.prototype.collide = function () {
 
 var length = 4;
   for(var i = 0; i < allEnemies.length; i++){
       if ( this.x < allEnemies[i].x + 50 && this.x + 55 > allEnemies[i].x && this.y
         < allEnemies[i].y + 150 && 150+ this.y > allEnemies[i].y){
          return true;
          break;
       }  
          else {         
            return false;
        }
    }
};
Player.prototype.playerreset = function(){
    {
        
        this.x = 360;
        this.y = 360;
        this.sprite = 'images/char-pink-girl.png';
    }
    
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var EnemyCount = 3;
var allEnemies = [];

for(var i = 0; i < EnemyCount; i++){
   allEnemies.push(new Enemy(i));
}
var player =  new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e){
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
