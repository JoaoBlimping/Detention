//a graphic that is tiled and can move around
//1/7/2015

$include Factory.js$
$include assets.js$


var TilingGraphic = function(picture,driftX,driftY)
{
  this.picture = picture;
  this.driftX = driftX;
  this.driftY = driftY;
  this.elapsedTime = 0.0;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
TilingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,
                                           deltaTime)
{
  //update the picture for if it's animated
  this.picture.update(deltaTime);

  //get the values
  this.elapsedTime += deltaTime;

  var offsetX = this.elapsedTime * this.driftX;
  var offsetY = this.elapsedTime * this.driftY;
  var imageWidth = this.picture.getWidth();
  var imageHeight = this.picture.getHeight();

  //make sure the offset doesn't go too far
  while (offsetX > imageWidth)
  {
    offsetX -= imageWidth;
  }
  while (offsetY > imageHeight)
  {
    offsetY -= imageHeight;
  }

  //draw the things
  for (var tileX = -1;tileX < screenWidth / imageWidth + 1;tileX++)
  {
    for (var tileY = -1;tileY < screenHeight / imageHeight + 1;tileY++)
    {
      this.picture.render(tileX * imageWidth + offsetX,
                          tileY * imageHeight + offsetY,imageWidth,imageHeight,
                          ctx);
    }
  }
};


//makes picture graphics
var tilingGraphicFactory = new Factory("TilingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
tilingGraphicFactory.make = function(dataReader)
{
  return new TilingGraphic(assets.graphics[dataReader.readNext()],
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()));
};
