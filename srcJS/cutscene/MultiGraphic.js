//a graphic that fills the whole screen with flashing
//30/6/2015

$include Factory.js$
$include assets.js$


var MultiGraphic = function(graphics)
{
  this.graphics = graphics;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
MultiGraphic.prototype.render = function(screenWidth,screenHeight,ctx,deltaTime)
{
  for (var i = 0;i < this.graphics.length;i++)
  {
    this.graphics[i].render(screenWidth,screenHeight,ctx,deltaTime);
  }
};


//makes picture graphics
var multiGraphicFactory = new Factory("MultiGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
multiGraphicFactory.make = function(dataReader)
{
  var graphics = [];
  while (true)
  {
    if (!dataReader.hasNext())
    {
      break;
    }

    var data = dataReader.peekNext();

    if (data == "END")
    {
      dataReader.readNext();
      break;
    }

    graphics.push(graphicFactory.make(dataReader));
  }

  return new MultiGraphic(graphics);
};
