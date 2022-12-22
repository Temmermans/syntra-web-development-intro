window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      // we can also attach event listeners in the constructor
      // we use an arrow function here, so this refers to the InputHandler class!!
      window.addEventListener("keydown", (e) => {
        const key = e.key;
        // if you hold down the arrow keys, the item will be added
        // multiple times. We need to check if it is already present
        // before adding it
        const index = this.game.keys.indexOf(e.key);
        // start with only ArrowUp, add ArrowDown later
        if ((key === "ArrowUp" || key === "ArrowDown") && index === -1) {
          this.game.keys.push(e.key);
        }
      });
      window.addEventListener("keyup", (e) => {
        // if the key is already present in the key array
        const index = this.game.keys.indexOf(e.key);
        if (index > -1) {
          // we remove it. Splice first arg is the starting point
          // the second is the delete count
          this.game.keys.splice(index, 1);
        }
      });
    }
  }
  class Projectile {}
  class Particle {}
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
      // speed might be made dynamic through a powerup, so best we
      // store it in a variable to adjust later
      this.maxSpeed = 3;
    }
    update() {
      // since the game object is also passed to the constructor
      // of the Player, we can access the game keys here as well.
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
      // without this else, the box would keep moving up and down
      else this.speedY = 0;
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
      // instantiate it on the game object
      this.input = new InputHandler(this);
      // the job of keys is to track all active keys, the ones that
      // are currently pressed down
      this.keys = [];
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  function animate(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
