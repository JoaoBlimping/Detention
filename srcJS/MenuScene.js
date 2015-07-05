//a menu where you start the game
//7/6/2015

$include SoundPlayer.js$
$include CutScene.js$
$include assets.js$

const FIRST_CUT_SCENE = "1.pig";


//creates the MenuScene with no arguments
var MenuScene = function()
{
  //set some things
  this.countdown = -1.0;

  //create the heading
  this.heading = document.createElement("h1");
  this.heading.innerHTML = "Detention!";
  document.body.appendChild(this.heading);

  //create the subtitle
  this.subTitle = document.createElement("h2");
  this.subTitle.innerHTML = "the Family Favourite Corporal Punishment Game";
  document.body.appendChild(this.subTitle);

  //create the picture
  this.picture = new Image();
  this.picture.src = "assets/graphic/begin.png";
  this.picture.noise = assets.sEs["nice.wav"];
  this.picture.owner = this;
  this.picture.onclick = function()
  {
    this.owner.countdown = 2.0;
    this.noise.play();
  };
  document.body.appendChild(this.picture);

  //create a div to put the 'fuck yeah's in
  this.fuckYeahs = document.createElement("div");
  document.body.appendChild(this.fuckYeahs);
};


//destroys the contents of the MenuScene with no arguments
MenuScene.prototype.delete = function()
{
  document.body.removeChild(this.heading);
  document.body.removeChild(this.subTitle);
  document.body.removeChild(this.picture);
  document.body.removeChild(this.fuckYeahs);
}


//updates the MenuScene, although it does nothing
//deltaTime is the time since last time
//returns whichever scene is to continue into the future
MenuScene.prototype.update = function(deltaTime)
{
  if (this.countdown > 0)
  {
    var fuckYeah = document.createElement("h1");
    fuckYeah.innerHTML = "fuck yeah";
    this.fuckYeahs.appendChild(fuckYeah);
    window.scrollTo(0,document.body.scrollHeight);

    this.countdown -= deltaTime;
    if (this.countdown <= 0)
    {
      return makeCutScene(assets.cutSceneDatas[FIRST_CUT_SCENE].getData());
    }
  }
  return this;
};
