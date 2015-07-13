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
  assets.loadSes("$insert ../ses.txt$");
  assets.loadTilesets("$insert ../tilesets.txt$");
  assets.loadSceneDatas("$insert ../scenes.txt$");
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
  for (var name in assets.graphics)
  {
    if (!assets.graphics[name].ready)
    {
      return this;
    }
  }

  //make sure all sound effects are loaded
  for (var name in assets.ses)
  {
    if (!assets.ses[name].isReady())
    {
      return this;
    }
  }

  //make sure all tilesets are loaded
  for (var name in assets.tilesets)
  {
    if (!assets.tilesets[name].isReady())
    {
      return this;
    }
  }

  return new MenuScene();
};


//a factory that makes LoadingScenes
var loadingSceneFactory = new Factory("LoadingScene");


//the thing that makes the stuff
loadingSceneFactory.make = function(dataReader)
{
  return new LoadingScene();
};
