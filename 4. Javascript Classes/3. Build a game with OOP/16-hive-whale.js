window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 700;
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
        } else if (key === "d") {
          this.game.debug = !this.game.debug;
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
      this.x = x;
      this.y = y;
      this.width = 10;
      this.height = 3;
      this.speed = 3;
      this.markedForDeletion = false;
      this.image = document.getElementById("projectile");
    }
    update() {
      this.x += this.speed;
      if (this.x > this.game.width * 0.8) this.markedForDeletion = true;
    }
    draw(context) {
      context.drawImage(this.image, this.x, this.y);
      if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  class Particle {
    constructor(game, x, y) {
      this.game = game;
      this.x = x;
      this.y = y;
      this.image = document.getElementById("gears");

      this.frameX = Math.floor(Math.random() * 3);
      this.frameY = Math.floor(Math.random() * 3);
      this.spriteSize = 50;

      this.sizeModifier = (Math.random() * 0.5 + 0.5).toFixed(1);
      this.size = this.spriteSize * this.sizeModifier;

      this.speedX = Math.random() * 6 - 3;

      this.speedY = Math.random() * -15;
      this.gravity = 0.5;
      this.markedForDeletion = false;

      this.angle = 0;

      this.va = Math.random() * 0.2 - 0.1;
    }

    update() {
      this.angle += this.va;
      this.speedY += this.gravity;
      this.x -= this.speedX;
      this.y += this.speedY;

      if (this.y > this.game.height + this.size || this.x < 0 - this.size) {
        this.markedForDeletion = true;
      }
    }
    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.spriteSize,
        this.frameY * this.spriteSize,
        this.spriteSize,
        this.spriteSize,
        this.x,
        this.y,
        this.size,
        this.size
      );
    }
  }
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.frameX = 0;
      this.frameY = 0;
      this.maxFrame = 37;
      this.speedY = 0;
      this.maxSpeed = 3;
      this.projectiles = [];
      this.image = document.getElementById("player");

      this.powerUp = false;
      this.powerUpTime = 0;
      this.powerUpLimit = 10000;
    }

    update(deltaTime) {
      if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
      else this.speedY = 0;
      this.y += this.speedY;

      this.projectiles.forEach((project) => {
        project.update();
      });

      this.projectiles = this.projectiles.filter((projectile) => !projectile.markedForDeletion);
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }

      if (this.powerUp) {
        if (this.powerUpTime > this.powerUpLimit) {
          this.powerUpTime = 0;
          this.powerUp = false;

          this.frameY = 0;
        } else {
          this.powerUpTime += deltaTime;
          this.frameY = 1;

          this.game.ammo += 0.1;
        }
      }
    }
    draw(context) {
      if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);

      context.drawImage(
        this.image,
        this.frameX * this.width,
        this.frameY * this.height,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.projectiles.forEach((projectile) => {
        projectile.draw(context);
      });
    }
    shootTop() {
      if (this.game.ammo > 0) {
        this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 30));
        this.game.ammo--;
      }

      if (this.powerUp) this.shootBottom();
    }

    shootBottom() {
      if (this.game.ammo > 0) {
        this.projectiles.push(new Projectile(this.game, this.x + 80, this.y + 175));
      }
    }
    enterPowerUp() {
      this.powerUpTime = 0;
      this.powerUp = true;
      this.game.ammo = this.game.maxAmmo;
    }
  }
  class Enemy {
    constructor(game) {
      this.game = game;
      this.x = this.game.width;
      this.speedX = Math.random() * -1.5 - 0.5;
      this.markedForDeletion = false;
      this.frameX = 0;
      this.frameY = 0;
      this.maxFrame = 37;
    }
    update() {
      this.x += this.speedX - this.game.speed;
      if (this.x + this.width < 0) this.markedForDeletion = true;

      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    }
    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.width,
        this.frameY * this.height,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );

      if (this.game.debug) {
        context.fillStyle = "black";
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fontSize = "20px Helvetica";
        context.fillText(this.lives, this.x, this.y);
      }
    }
  }
  class Angler1 extends Enemy {
    constructor(game) {
      super(game);

      this.width = 228;
      this.height = 169;
      this.y = Math.random() * (this.game.height * 0.95 - this.height);

      this.lives = 2;
      this.score = this.lives;
      this.image = document.getElementById("angler1");
      this.frameY = Math.floor(Math.random() * 3);
    }
  }
  class Angler2 extends Enemy {
    constructor(game) {
      super(game);

      this.width = 213;
      this.height = 165;
      this.y = Math.random() * (this.game.height * 0.95 - this.height);

      this.lives = 3;
      this.score = this.lives;
      this.image = document.getElementById("angler2");
      this.frameY = Math.floor(Math.random() * 2);
    }
  }
  class LuckyFish extends Enemy {
    constructor(game) {
      super(game);

      this.width = 99;
      this.height = 95;
      this.y = Math.random() * (this.game.height * 0.95 - this.height);

      this.lives = 3;
      this.score = 15;

      this.type = "lucky";
      this.image = document.getElementById("lucky");
      this.frameY = Math.floor(Math.random() * 2);
    }
  }
  // when killed the hivewhale will spawn 5 extra enemies
  class HiveWhale extends Enemy {
    constructor(game) {
      super(game);

      this.width = 400;
      this.height = 227;
      // adjust game height
      this.y = Math.random() * (this.game.height * 0.95 - this.height);

      this.lives = 3;
      this.score = this.lives;
      this.type = "hive";
      // will move very slow so we override the parent class speed
      this.speedX = Math.random() * -1.2 - 0.2;
      this.image = document.getElementById("hivewhale");
      this.frameY = 0;
    }
  }
  // Drones live inside the HiveWhale and attack the player when the
  // hivewhale is killed
  class Drone extends Enemy {
    // they dont spawn like the rest from the right off the screen
    // but pop out of a hivewhale, so we need x and y
    constructor(game, x, y) {
      super(game);

      this.width = 115;
      this.height = 95;
      // adjust game height
      this.y = y;
      this.x = x;

      this.lives = 15;
      this.score = this.lives;
      this.type = "drone";
      // will move very fast
      this.speedX = Math.random() * -4.2 - 0.5;
      this.image = document.getElementById("drone");
      this.frameY = Math.floor(Math.random() * 2);
    }
  }
  class Layer {
    constructor(game, image, speedModifier) {
      this.game = game;
      this.image = image;
      this.speedModifier = speedModifier;
      this.width = 1768;
      this.height = 500;
      this.x = 0;
      this.y = 0;
    }
    update() {
      if (this.x <= -this.width) this.x = 0;
      this.x -= this.game.speed * this.speedModifier;
    }
    draw(context) {
      context.drawImage(this.image, this.x, this.y);
      context.drawImage(this.image, this.x + this.width, this.y);
    }
  }
  class Background {
    constructor(game) {
      this.game = game;
      this.image1 = document.getElementById("layer1");
      this.layer1 = new Layer(game, this.image1, 0.2);
      this.image2 = document.getElementById("layer2");
      this.layer2 = new Layer(game, this.image2, 0.3);
      this.image3 = document.getElementById("layer3");
      this.layer3 = new Layer(game, this.image3, 1);
      this.image4 = document.getElementById("layer4");
      this.layer4 = new Layer(game, this.image4, 1.5);
      this.layers = [this.layer1, this.layer2, this.layer3];
    }
    update() {
      this.layers.forEach((layer) => layer.update());
    }
    draw(context) {
      this.layers.forEach((layer) => layer.draw(context));
    }
  }
  class UI {
    constructor(game) {
      this.game = game;
      this.fontSize = 25;
      this.fontFamily = "Helvetica";
      this.color = "white";
    }
    draw(context) {
      context.save();
      context.fillStyle = this.color;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      context.shadowColor = "black";
      context.font = this.fontSize + "px " + this.fontFamily;
      context.fillText("Score: " + this.game.score, 20, 40);
      for (let i = 0; i < this.game.ammo; i++) {
        context.fillRect(20 + 5 * i, 50, 3, 20);
      }

      const formattedTime = (this.game.gameTime * 0.001).toFixed(1);
      context.fillText("Timer: " + formattedTime, 20, 100);

      if (this.game.gameOver) {
        context.textAlign = "center";
        let message1;
        let message2;
        if (this.game.score > this.game.winningScore) {
          message1 = "You win!";
          message2 = "Well done.";
        } else {
          message1 = "You lost.";
          message2 = " Try again next time.";
        }
        context.font = "50px " + this.fontFamily;
        context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 40);
        context.font = "25px " + this.fontFamily;
        context.fillText(message2, this.game.widh * 0.5, this.game.height * 0.5 + 40);
      }
      context.restore();
    }
  }
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);

      this.background = new Background(this);
      this.ui = new UI(this);
      this.keys = [];

      this.ammo = 20;
      this.maxAmmo = 50;
      this.ammoTimer = 0;
      this.ammoInterval = 500;

      this.enemies = [];
      this.enemyTimer = 0;
      this.enemyInterval = 1000;

      this.score = 0;

      this.winningScore = 10;
      this.gameOver = false;
      this.gameTime = 0;
      this.timeLimit = 30000;

      this.speed = 1;

      this.debug = false;

      this.particles = [];
    }
    update(deltaTime) {
      if (!this.gameOver) this.gameTime += deltaTime;
      if (this.gameTime > this.timeLimit) this.gameOver = true;

      this.background.update();
      this.background.layer4.update();

      this.player.update(deltaTime);

      if (this.ammoTimer > this.ammoInterval) {
        if (this.ammo < this.maxAmmo) {
          this.ammo++;
          this.ammoTimer = 0;
        }
      } else {
        this.ammoTimer += deltaTime;
      }

      this.particles.forEach((p) => p.update());
      this.particles.filter((p) => !p.markedForDeletion);

      this.enemies.forEach((enemy) => {
        enemy.update();

        if (this.checkCollision(this.player, enemy)) {
          enemy.markedForDeletion = true;

          // adjust the number of particles to the score of the enemy
          // to avoid to many particles
          for (let i = 0; i < enemy.score; i++) {
            this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
          }
          if (enemy.type === "lucky") this.player.enterPowerUp();
          else this.score--;
        }

        this.player.projectiles.forEach((projectile) => {
          if (this.checkCollision(projectile, enemy)) {
            enemy.lives--;
            projectile.markedForDeletion = true;

            this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));

            if (enemy.lives <= 0) {
              // adjust the number of particles to the score of the enemy
              // to avoid to many particles
              for (let i = 0; i < enemy.score; i++) {
                this.particles.push(new Particle(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
              }

              enemy.markedForDeletion = true;

              // if we destroy a hive, we add drones
              if (enemy.type === "hive") {
                for (let i = 0; i < 5; i++) {
                  // spread the drones out a bit so they dont stack on top of each other
                  this.enemies.push(
                    new Drone(this, enemy.x + Math.random() * enemy.width, enemy.y + Math.random() * enemy.height * 0.5)
                  );
                }
              }
              if (!this.gameOver) this.score += enemy.score;
              if (this.score >= this.winningScore) {
                this.gameOver = true;
              }
            }
          }
        });
      });

      this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);

      if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.ui.draw(context);

      this.particles.forEach((p) => p.draw(context));

      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });

      this.background.layer4.draw(context);
    }
    addEnemy() {
      if (Math.random() < 0.3) this.enemies.push(new Angler1(this));
      else if (Math.random() < 0.6) this.enemies.push(new Angler2(this));
      // add the hive whale
      else if (Math.random() < 0.8) this.enemies.push(new HiveWhale(this));
      else this.enemies.push(new LuckyFish(this));
    }
    checkCollision(rect1, rect2) {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y
      );
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
