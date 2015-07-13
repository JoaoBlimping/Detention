//contains all the game assets, just like back in the good old days
//15/6/2015

$include stringUtils.js$
$include SoundPlayer.js$
$include Sprite.js$


//location of graphics files
const GRAPHIC_DIRECTORY = "assets/graphic/";

//location of sounds effect files
const SE_DIRECTORY = "assets/se/";

//location of tileset files
const TILESET_DIRECTORY = "assets/tilesets/"

//location of mob files
const MOB_DIRECTORY = "assets/mob/";

//location of cutScene files
const SCENE_DIRECTORY = "assets/scene/";

//location of music files
const BGM_DIRECTORY = "assets/bgm/";


//a singleton type thing which stores all of the assets we need and desire
var assets =
{
  graphics : [],
  ses : [],
  tilesets : [],
  mobDatas : [],
  sceneDatas : []
};


//makes it start loading all the sprites
assets.loadSprites = function(loadList)
{
  var listReader = new StringReader(loadList);

  while (listReader.hasNext())
  {
    var name = listReader.readNext();
    var img = new Sprite(GRAPHIC_DIRECTORY + name);
    this.graphics[name] = img;
  }
};


//makes it start loading all the animations
assets.loadAnimations = function(loadList)
{
  var listReader = new StringReader(loadList);

  while (listReader.hasNext())
  {
    var name = listReader.readNext();
    var frames = parseInt(listReader.readNext());
    var length = parseFloat(listReader.readNext());

    console.log(name);
    var img = new Animation(GRAPHIC_DIRECTORY + name,frames,length);
    this.graphics[name] = img;
  }
};


//makes it start loading sound effects
assets.loadSes = function(loadList)
{
  var listReader = new StringReader(loadList);

  while (listReader.hasNext())
  {
    var name = listReader.readNext();
    var audio = new SoundPlayer(SE_DIRECTORY + name);
    this.ses[name] = audio;
  }
};


//makes it start loading tilesets
//loadlist is the list of tilesets to load
assets.loadTilesets = function(loadList)
{
  var listReader = new StringReader(loadList);

  while (listReader.hasNext())
  {
    var image = listReader.readNext()
    var tileWidth = parseInt(listReader.readNext());
  	var tileHeight = parseInt(listReader.readNext());

    console.log(image);

  	this.tilesets[image] = new Tileset(image,tileWidth,tileHeight);
  }
};


//makes it start loading all the mobs
assets.loadMobs = function(loadList)
{



};


//makes it start loading data for cutscenes
assets.loadSceneDatas = function(loadList)
{
  var listReader = new StringReader(loadList);

  while (listReader.hasNext())
  {
    var name = listReader.readNext();
    var loader = new DataLoader(SCENE_DIRECTORY + name);
    this.sceneDatas[name] = loader;
  }
};


//loads a song and gives it back to the caller
assets.loadBGM = function(src)
{
  return new Audio(BGM_DIRECTORY + src);
};
