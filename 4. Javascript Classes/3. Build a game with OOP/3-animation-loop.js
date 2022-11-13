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
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      // to test if the frame is actuallu updating, set this variable
      // to another value than 0
      // the reason it gets longer and does not move is because we keep seeing
      // old paints
      this.speedY = 0.2;
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

  const game = new Game(canvas.width, canvas.height);
  // a game has something called an animation loop, which will
  // call the draw method 60 times per second

  // requestAnimationFrame passes a timestamp as first arg
  // that we can use later to create periodic events in our game
  function animate(timestamp) {
    // to fix the rect getting longer above do this:
    // clear the canvas every loop so we can repaint from scratch
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update();
    // will be passed to the game initializer and also to the player
    // so the game will now know where to draw it
    game.draw(ctx);

    // a build in method that tells the browser we wish to perform an animation
    // and it requests that the browser calls a specified function
    // to update an anumation before the next repaint

    // passing the function itself creates an endless loop
    requestAnimationFrame(animate);
  }
  // kick off the animation loop
  animate();
});
