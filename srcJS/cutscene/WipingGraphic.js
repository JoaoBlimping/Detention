//a graphic that makes a picture move about
//9/6/2015

$include Factory.js$
$include assets.js$


var WipingGraphic = function(picture,startX,startY,driftX,driftY)
{
  this.picture = picture;
  this.startX = startX;
  this.startY = startY;
  this.driftX = driftX;
  this.driftY = driftY;
  this.elapsedTime = 0.0;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
WipingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,
                                           deltaTime)
{
  this.elapsedTime += deltaTime;

  var x = this.startX + this.elapsedTime * this.driftX;
  var y = this.startY + this.elapsedTime * this.driftY;
  var imageWidth = this.picture.getWidth();
  var imageHeight = this.picture.getHeight();

  this.picture.update(deltaTime);
  this.picture.render(x,y,imageWidth,imageHeight,ctx);
};


//makes picture graphics
var wipingGraphicFactory = new Factory("WipingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
wipingGraphicFactory.make = function(dataReader)
 {
  return new WipingGraphic(assets.graphics[dataReader.readNext()],
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()));
};
