//a graphic that fills the whole screen with flashing
//30/6/2015

$include Factory.js$
$include assets.js$


var FlashingGraphic = function(colours)
{
  this.colours = colours;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
FlashingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,deltaTime)
{
  choice = Math.floor(Math.random() * this.colours.length);

  ctx.fillStyle = this.colours[choice];
  ctx.fillRect(0,0,screenWidth,screenHeight);
};


//makes picture graphics
var flashingGraphicFactory = new Factory("FlashingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
flashingGraphicFactory.make = function(dataReader)
{
  var colours = [];
  while (true)
  {
    if (!dataReader.hasNext())
    {
      break;
    }

    var data = dataReader.readNext();

    if (data == "END")
    {
      break;
    }

    colours.push(data);
  }
  return new FlashingGraphic(colours);
};
