//a graphic that just shows a picture
//9/6/2015

$include Factory.js$
$include assets.js$


var PictureGraphic = function(picture)
{
  this.picture = picture;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
PictureGraphic.prototype.render = function(screenWidth,screenHeight,ctx,deltaTime)
{
  //update the picture for if it's animated
  this.picture.update(deltaTime);

  //draw the picture
  this.picture.render(0,0,screenWidth,screenHeight,ctx);
};


//makes picture graphics
var pictureGraphicFactory = new Factory("PictureGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
pictureGraphicFactory.make = function(dataReader)
{
  return new PictureGraphic(assets.graphics[dataReader.readNext()]);
};
