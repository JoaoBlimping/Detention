//a scene that shows cutscenes
//9/6/2015

$include DataLoader.js$
$include stringUtils.js$
$include cutscene/Slide.js$
$include cutscene/PictureGraphic.js$


//creates the cutscene with no arguments
var CutScene = function(slides)
{
  //static properties
  CutScene.screenWidth = 777;
  CutScene.screenHeight = 555;

  //the table which contains both the things
  this.table = document.createElement("table");
  document.body.appendChild(this.table);

  var topRow = this.table.insertRow();
  var bottomRow = this.table.insertRow();
  this.topCell = topRow.insertCell();
  this.bottomCell = bottomRow.insertCell();

  //the graphics canvas
  this.canvas = document.createElement("canvas");
  this.canvas.width = CutScene.screenWidth;
  this.canvas.height = CutScene.screenHeight;

  this.topCell.appendChild(this.canvas);
  this.ctx = this.canvas.getContext("2d");

  //the slides
  this.slides = slides;
  this.currentCaption = this.slides[0].textCaption;

  //recalls if this slide has been played yet
  this.fresh = true;
};


//destroys all it's stuff
CutScene.prototype.delete = function()
{
  document.body.removeChild(this.table);
};


//updates the CutScene
//deltaTime the time since last time
CutScene.prototype.update = function(deltaTime)
{
  if (this.fresh)
  {
    this.slides[0].play();
    this.fresh = false;

    this.currentCaption = document.createElement("h2");
    this.currentCaption.innerHTML = this.slides[0].textCaption;
    this.bottomCell.appendChild(this.currentCaption);
  }
  else if (!this.slides[0].sound.isPlaying())
  {
    this.slides.splice(0,1);
    this.fresh = true;

    this.bottomCell.removeChild(this.currentCaption);
  }

  this.slides[0].render(CutScene.screenWidth,CutScene.screenHeight,this.ctx,
                    deltaTime);

  return this;
};


//the thing that makes the stuff
var makeCutScene = function(data)
{
  var dataReader = new StringReader(data);

  slides = [];
  while (dataReader.hasNext())
  {
    slides.push(makeSlide(dataReader));
  }

  return new CutScene(slides);
};
