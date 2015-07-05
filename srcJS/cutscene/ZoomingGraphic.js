//a graphic that makes a picture zoom in or out
//9/6/2015

$include Factory.js$
$include assets.js$


var ZoomingGraphic = function(picture,startScale,growthRate)
{
  this.picture = picture;
  this.startScale = startScale;
  this.growthRate = growthRate;
  this.elapsedTime = 0.0;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
ZoomingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,
                                           deltaTime)
{
  this.elapsedTime += deltaTime;

  var growthFactor = 1 + this.elapsedTime * this.growthRate;
  var imageWidth = this.picture.getWidth();
  var imageHeight = this.picture.getHeight();

  var x = screenWidth / 2 - (imageWidth * growthFactor) / 2;
  var y = screenHeight / 2 - (imageHeight * growthFactor) / 2;
  var w = (imageWidth * growthFactor);
  var h = (imageHeight * growthFactor);

  this.picture.update(deltaTime);
  this.picture.render(x,y,w,h,ctx);
};


//makes picture graphics
var zoomingGraphicFactory = new Factory("ZoomingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
zoomingGraphicFactory.make = function(dataReader)
{
  return new ZoomingGraphic(assets.graphics[dataReader.readNext()],
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()));
};
