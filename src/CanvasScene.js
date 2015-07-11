//a super prototype for scenes that have a screen
//11/7/2015


$include constants.js$


//creates the canvas
var CanvasScene = function()
{
  this.canvas = document.createElement("canvas");
  this.canvas.width = SCREEN_WIDTH;
  this.canvas.height = SCREEN_HEIGHT;
  document.body.appendChild(this.canvas);
  this.ctx = this.canvas.getContext("2d");
};


//deletes the canvas
CanvasScene.prototype.delete = function()
{
  document.body.removeChild(this.canvas);
};
