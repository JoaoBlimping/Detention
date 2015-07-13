//a super prototype for scenes that have a screen
//11/7/2015


//creates the canvas
//screenWidth is the width of the canvas
//screenHeight is the height of the canvas
var CanvasScene = function(screenWidth,screenHeight)
{
  this.canvas = document.createElement("canvas");
  this.canvas.width = screenWidth;
  this.canvas.height = screenHeight;
  document.body.appendChild(this.canvas);
  this.ctx = this.canvas.getContext("2d");
};


//deletes the canvas
CanvasScene.prototype.delete = function()
{
  document.body.removeChild(this.canvas);
};
