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
    constructor(game, x, y) {
      this.game = game;
      this.x = x + 80;
      this.y = y + 30;
      this.width = 10;
      this.height = 3;
      this.speed = 3;
      this.markedForDeletion = false;
    }
    update() {
      this.x += this.speed;
      if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
    }
    draw(context) {
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
      this.projectiles = [];
    }
    update() {
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;

      this.projectiles.forEach((project) => {
        project.update();
      });

      this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForDeletion);
    }
    draw(context) {
      context.fillStyle = "black";
      context.fillRect(this.x, this.y, this.width, this.height);

      this.projectiles.forEach((projectile) => {
        projectile.draw(context);
      });
    }
    shootTop() {
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
      this.ammo = 20;
      // no infinite ammo
      this.maxAmmo = 50;
      // between 0 and some limit. Every time it reaches the limit
      // it will trigger an event and it will reset back to 0
      this.ammoTimer = 0;
      // replenish ammo every 500ms
      this.ammoInterval = 500;
    }
    update(deltaTime) {
      this.player.update();
      // if we exceeded our interval and we don't have max ammo yet
      // add some ammo and reset the timer
      // else add the deltaTime to our ammoTimer
      if (this.ammoTimer > this.ammoInterval) {
        if (this.ammo < this.maxAmmo) {
          this.ammo++;
          this.ammoTimer = 0;
        }
      } else {
        this.ammoTimer += deltaTime;
      }
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  // store a timestamp from the previous animation loop
  let lastTime = 0;
  function animate(timestamp) {
    // difference between two times
    // note that slower or faster machines may have a higher or lower
    // deltatime
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // pass it to the game so we can do stuff with it
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  // make sure to pass 0 as the first "timestamp"
  animate(0);
});
