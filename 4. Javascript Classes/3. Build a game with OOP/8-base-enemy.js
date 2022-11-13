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
  class Enemy {
    // this is the enemy base class
    // specific enemies will inherit from this class
    constructor(game) {
      this.game = game;
      // enemies go from right to left so start at the right
      this.x = this.game.width;
      this.speedX = Math.random() * -1.5 - 0.5;
      this.markedForDeletion = false;
    }
    update() {
      this.x += this.speedX;
      // x is the top left corner of the rect. So if you add the width to
      // it it will get to zero if completely moved off the left side off the screen
      // when that happens, we want to delete them
      if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(context) {
      context.fillStyle = "red";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // create our first enemy
  class Angler1 extends Enemy {
    constructor(game) {
      // it will look also for methods on the parent class Enemy
      super(game);
      // just so we can see a bit better before working with sprites
      this.width = 228 * 0.2;
      this.height = 169 * 0.2;
      // y starts in the top left corner
      // we want them to appear on a random height convering 90% of the screen
      // and offset it with the anglers own height else it will appear too low, sometimes going off screen
      // that is why x is defined on the parent (it is fixed) but y on the sub class, because we need its height
      this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }
  }
  class Layer {}
  class Background {}
  class UI {
    constructor(game) {
      this.game = game;
      this.fontSize = 25;
      this.fontFamily = "Helvetica";
      this.color = "white";
    }
    draw(context) {
      context.fillStyle = this.color;
      for (let i = 0; i < this.game.ammo; i++) {
        context.fillRect(20 + 5 * i, 50, 3, 20);
      }
    }
  }
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.ui = new UI(this);
      this.keys = [];
      this.ammo = 20;
      this.maxAmmo = 50;
      this.ammoTimer = 0;
      this.ammoInterval = 500;
      // we start with no enemies
      this.enemies = [];
      // same trick with the delta time as with the ammo
      this.enemyTimer = 0;
      // we want to add a new enemy every second
      this.enemyInterval = 1000;
      this.gameOver = false;
    }
    update(deltaTime) {
      this.player.update();

      if (this.ammoTimer > this.ammoInterval) {
        if (this.ammo < this.maxAmmo) {
          this.ammo++;
          this.ammoTimer = 0;
        }
      } else {
        this.ammoTimer += deltaTime;
      }

      // update all the enemies with the necessary coordinates
      this.enemies.forEach((enemy) => {
        enemy.update();
      });
      // remove the offscreen ones
      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);

      // if the game is over we do not want to keep adding enemies
      if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
    }
    draw(context) {
      this.player.draw(context);
      this.ui.draw(context);
      // draw all the enemies
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
    }

    // a special method to add enemies to our game
    addEnemy() {
      this.enemies.push(new Angler1(this));
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate(0);
});
