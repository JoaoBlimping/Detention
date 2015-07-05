//just says loading and sets up some stuff to load and waits for it
//19/6/2015

$include MenuScene.js$
$include assets.js$


//the loading text
const LOADING_TEXT = "Loading...";


//creates the loading text
var LoadingScene = function()
{
  //add the loading text
  this.text = document.createElement("h1");
  this.text.innerHTML = LOADING_TEXT;
  document.body.appendChild(this.text);

  //set up all the asset stuff loading
  assets.loadSprites("$insert ../sprites.txt$");
  assets.loadAnimations("$insert ../animations.txt$");
  assets.loadSEs("$insert ../sEs.txt$");
  assets.loadCutsceneDatas("1.pig");
};


//destroys the loading text
LoadingScene.prototype.delete = function()
{
  document.body.removeChild(this.text);
};


//updates the LoadingScene, checking if it's done loading
//deltaTime is the time passed, although it isn't used
LoadingScene.prototype.update = function(deltaTime)
{
  //make sure all graphics are loaded
  for (var name in assets.bGMs)
  {
    if (!assets.bGMs[name].ready)
    {
      return this;
    }
  }

  //make sure all sound effects are loaded
  for (var name in assets.sEs)
  {
    if (!assets.sEs[name].isReady())
    {
      return this;
    }
  }

  return new MenuScene();
};
