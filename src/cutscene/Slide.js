//a slide in a CutScene
//9/6/2015

$include Factory.js$
$include stringUtils.js$
$include cutscene/graphicFactory.js$


//creates the slide
//graphic is the slide's visual stuff
//sound is the slide's sound
//text is the slide's text
var Slide = function(graphic,sound,textCaption)
{
  this.graphic = graphic;
  this.sound = sound;
  this.textCaption = textCaption;
};


//starts the Slide's sound and stuff
Slide.prototype.play = function()
{
  this.sound.play();
};


//displays the Slide
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
Slide.prototype.render = function(screenWidth,screenHeight,ctx,deltaTime)
{
  //draw the graphics
  this.graphic.render(screenWidth,screenHeight,ctx,deltaTime);
};


//makes a slide
//data is the data it makes it out of
makeSlide = function(dataReader)
{
  sound = assets.ses[dataReader.readNext()];
  graphic = graphicFactory.make(dataReader);
  text = dataReader.readNext();

  return new Slide(graphic,sound,text);
};
