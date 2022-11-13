window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class InputHandler {}
  class Projectile {}
  class Particle {}
  class Player {
    constructor(game) {
      this.game = game;
      // the width of a single frame in the player sprite
      // is 120w/190h. A good practice is to create the sprite with
      // these dimensions
      this.width = 120;
      this.height = 190;
      // the starting position of the player
      this.x = 20;
      this.y = 100;
      // no vertical movement to start with
      this.speedY = 0;
    }
    update() {
      this.y += this.speedY;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  class Enemy {}
  class Layer {}
  class Background {}
  class UI {}
  // This will pull everything together, the brain of the game
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  // instantiate the entire game
  // doing this also instantiates the player because of the constructor
  const game = new Game(canvas.width, canvas.height);
});
