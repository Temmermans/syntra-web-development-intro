window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class InputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener("keydown", (e) => {
        const key = e.key;
        const index = this.game.keys.indexOf(e.key);
        if ((key === "ArrowUp" || key === "ArrowDown") && index === -1) {
          this.game.keys.push(e.key);
          // if the player presses space, we shoot
        } else if (key === " ") {
          this.game.player.shootTop();
        }
      });
      window.addEventListener("keyup", (e) => {
        const index = this.game.keys.indexOf(e.key);
        if (index > -1) {
          this.game.keys.splice(index, 1);
        }
      });
    }
  }
  class Projectile {
    // x and y are dynamic based on player position
    constructor(game, x, y) {
      this.game = game;
      // offset the x and y of the player so it seems the ammo
      // is coming from the mouth of our
      this.x = x + 80;
      this.y = y + 30;
      this.width = 10;
      this.height = 3;
      // 3px per frame
      this.speed = 3;
      this.markedForDeletion = false;
    }
    update() {
      this.x += this.speed;
      // if the projectile is at 80% of the width of the game
      // we want to remove it, else we could destroy enemies that are
      // offscreen
      if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
    }
    draw(context) {
      // we will use sprites and animates soon, but for now
      context.fillStyle = "yellow";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  class Particle {}
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0;
      this.maxSpeed = 3;
      // all currently active projectiles
      this.projectiles = [];
    }
    update() {
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;
      // handle the projectiles
      this.projectiles.forEach((project) => {
        project.update();
      });
      // remove all the projectiles we dont need anymore
      this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForDeletion);
    }
    draw(context) {
      context.fillStyle = "black";
      context.fillRect(this.x, this.y, this.width, this.height);
      // draw all the projectiles we need in each frame
      this.projectiles.forEach((projectile) => {
        projectile.draw(context);
      });
    }
    // a player will have two shooting methods, the first one is shooting
    // from the mouth of our mount
    shootTop() {
      // we want the player to have limited ammo that recharges over time
      // or is boosted with a powerup
      if (this.game.ammo > 0) {
        this.projectiles.push(new Projectile(this.game, this.x, this.y));
        this.game.ammo--;
      }
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
      this.input = new InputHandler(this);
      this.keys = [];
      // our start ammo
      this.ammo = 20;
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
