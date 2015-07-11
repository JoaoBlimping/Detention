//a super prototype for scenes that have a screen
//11/7/2015


//creates the canvas
var CanvasScene = function()
{
  this.canvas = document.createElement("canvas");
  document.body.appendChild(this.canvas);
  this.ctx = this.canvas.getRenderingContext("2d");
};


//deletes the canvas
CanvasScene.prototype.delete = function()
{
  document.body.removeChild(this.canvas);
};
