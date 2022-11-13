// The load event fires when all the styles and images have been loaded
// we need this because we are loading a lot of graphics
// also outside of games, always make sure assets and html are loaded before you run the javascript that depends on them
window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  // the drawing context contains all methods and properties that allow
  // us to draw and animate colours, shapes and graphics
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  // biggest advantage of classes is encapsulation
  // grouping of data and the methods that act on that data
  // in one object. Access to that data can be restricted from the outside

  // What classes do we need for this game?

  // Keep track of specified user inputs via keyboard etc..
  class InputHandler {}
  // This will handle the player lasers
  class Projectile {}
  // This will deal with falling screws, corks from damaged enemies
  class Particle {}
  // This will animate the player sprite sheet
  class Player {}
  // This will be the blueprint for all our enemy types
  class Enemy {}
  // This will handle the different background layers and handling the animation of the parallax
  class Layer {}
  // The Background will pull all the layers together
  class Background {}
  // This will show the HUD items for the user
  class UI {}
  // This will pull everything together, the brain of the game
  class Game {}
});
