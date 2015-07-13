//the main loop of the program
//6/6/2015


//some utilities for strings
//10/6/2015


//tells you if a character is whitespace
//returns true iff it is
function isWhitespace(char)
{
  return (char == '_' || char == '\n');
};


//a class that lets you read strings while not destroying them and stuff
//rawString is the string that it reads
var StringReader = function(rawString)
{
  this.rawString = rawString;
  this.currentIndex = 0;
};


//tells you if the StringReader still has more to read
StringReader.prototype.hasNext = function()
{
  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    if (!isWhitespace(this.rawString.charAt(i)))
    {
      return true;
    }
  }
  return false;
};


//gives you the next token in the string if it has one, then goes to the next
StringReader.prototype.readNext = function()
{
  var start = -1;
  var end = -1;

  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    char = this.rawString.charAt(i);

    //test for the start of the token
    if (!isWhitespace(char) && start == -1)
    {
      start = i;
    }

    //test for the end of the token
    if (isWhitespace(char) && start != -1)
    {
      this.currentIndex = i;
      return this.rawString.substring(start,this.currentIndex);
    }
  }
  this.currentIndex = this.rawString.length;
  return this.rawString.substring(start);
};


//gives you the next token in the string if it has one
StringReader.prototype.peekNext = function()
{
  var start = -1;
  var end = -1;

  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    char = this.rawString.charAt(i);

    //test for the start of the token
    if (!isWhitespace(char) && start == -1)
    {
      start = i;
    }

    //test for the end of the token
    if (isWhitespace(char) && start != -1)
    {
      return this.rawString.substring(start,i);
    }
  }
  return this.rawString.substring(start);
};
//contains an abstract factory that makes scenes of various specifications
//6/7/2015


//a factory that is made of more factories!! pingazzzzzzz
//10/6/2015



//sets the factories that the factory uses
var AbstractFactory = function(factories)
{
  this.factories = factories;
};


//makes something from the factory
//data the data used, the first token is the concrete factory's name
AbstractFactory.prototype.make = function(dataReader)
{
  factory = dataReader.readNext();

  for (i = 0;i < this.factories.length;i++)
  {
    if (factory == this.factories[i].identifier)
    {
      return this.factories[i].make(dataReader);
    }
  }

  console.log("no factory named "+factory);
  return 0;
};
//just says loading and sets up some stuff to load and waits for it
//19/6/2015

//a menu where you start the game
//7/6/2015

//a thing that plays sounds properly
//8/6/2015


//creates the SoundPlayer
//src is the sound file it plays
var SoundPlayer = function(src)
{
  this.sound = new Audio(src);
  this.sound.ready = false;
  this.sound.playing = false;

  //when the sound can play all the way through
  this.sound.oncanplaythrough = function()
  {
    this.ready = true;
  };

  //when the sound finishes playing
  this.sound.onended = function()
  {
    this.playing = false;
  };

};

//plays the sound
SoundPlayer.prototype.play = function()
{
  if (this.sound.ready)
  {
    this.sound.currentTime = 0;
    this.sound.play();
    this.sound.playing = true;
  }
};


//tells you if the sound is ready to play
SoundPlayer.prototype.isReady = function()
{
  return this.sound.ready;
};


//tells you if the sound is currently playing
SoundPlayer.prototype.isPlaying = function()
{
  return this.sound.playing;
}
//a scene that shows cutscenes
//9/6/2015

//loads things somehow
//9/6/2015


//creates the dataloader
//url is the address of the data to load
var DataLoader = function(url)
{
  this.iframe = document.createElement("iframe");
  document.body.appendChild(this.iframe);
  this.iframe.src = url;
  this.iframe.hidden = true;
  this.iframe.ready = false;
  this.iframe.owner = this;
  this.iframe.onload = function()
  {
    this.ready = true;
  };
};


//tells you if the loader is ready yet
//return true iff it is
DataLoader.prototype.isReady = function()
{
  return this.iframe.ready;
};

//gets you the data that it loaded
//return the data
DataLoader.prototype.getData = function()
{
  if (!this.isReady())
  {
    console.log("bloody ebola");
    return 666;
  }

  var iDocument = this.iframe.contentDocument || this.iframe.contentWindow.document;
  return iDocument.getElementsByTagName("pre")[0].innerHTML;
};
//a slide in a CutScene
//9/6/2015

//a prototype for a thing that makes stuff
//9/6/2015


//makes a factory with a name
var Factory = function(identifier)
{
  this.identifier = identifier;
};


//you are meant to override this to make it make whatever your heart desires!
//data the content to make it from
Factory.prototype.make = function(dataReader)
{
  console.log("Factory.make is meant to be overridden");
};
//a factory that makes graphics
//9/6/2015

//a graphic that just shows a picture
//9/6/2015

//contains all the game assets, just like back in the good old days
//15/6/2015

//contains prototypes for showing pictures and animations
//4/7/2015

var Sprite = function(src)
{
	this.image = new Image();
	this.image.ready = false;
	this.image.onload = function()
	{
		this.ready = true;
		console.log("sprite "+src+" loaded");
	};
	this.image.src = src;
};

Sprite.prototype.update = function(deltaTime)
{
	//does nothing
};

Sprite.prototype.render = function(x,y,w,h,ctx)
{
	if (this.image.ready)
	{
		ctx.drawImage(this.image,x,y,w,h);
	}
};

Sprite.prototype.isReady = function()
{
	return this.image.ready;
};

Sprite.prototype.getWidth = function()
{
	return this.image.width;
};

Sprite.prototype.getHeight = function()
{
	return this.image.height;
};


//-----------------------------------------------------animation prototype
var Animation = function(src,frames,length)
{
	this.frames = frames;
	this.length = length;
	this.time = 0;

	this.image = new Image();
	this.image.ready = false;
	this.image.onload = function()
	{
		this.ready = true;
		console.log("animation "+src+" loaded");
	};
	this.image.src = src;
};

Animation.prototype.update = function(deltaTime)
{
	this.time += deltaTime;
	while (this.time > this.length)
	{
		this.time -= this.length;
	}
};

Animation.prototype.render = function(x,y,w,h,ctx)
{
	if (this.image.ready)
	{
		var frameWidth = this.image.width / this.frames;
		var frameIndex = Math.floor((this.time / this.length) * this.frames);

		ctx.drawImage(this.image,frameWidth * frameIndex,0,this.image.width / this.frames,
					  this.image.height,x,y,w,h);
	}
};

Animation.prototype.isReady = function()
{
	return this.image.ready;
};

Animation.prototype.getWidth = function()
{
	return this.image.width / this.frames;
};

Animation.prototype.getHeight = function()
{
	return this.image.height;
};


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
//a graphic that fills the whole screen with flashing
//30/6/2015



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
//a graphic that makes a picture zoom in or out
//9/6/2015



var ZoomingGraphic = function(picture,startScale,growthRate)
{
  this.picture = picture;
  this.startScale = startScale;
  this.growthRate = growthRate;
  this.elapsedTime = 0.0;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
ZoomingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,
                                           deltaTime)
{
  this.elapsedTime += deltaTime;

  var growthFactor = 1 + this.elapsedTime * this.growthRate;
  var imageWidth = this.picture.getWidth();
  var imageHeight = this.picture.getHeight();

  var x = screenWidth / 2 - (imageWidth * growthFactor) / 2;
  var y = screenHeight / 2 - (imageHeight * growthFactor) / 2;
  var w = (imageWidth * growthFactor);
  var h = (imageHeight * growthFactor);

  this.picture.update(deltaTime);
  this.picture.render(x,y,w,h,ctx);
};


//makes picture graphics
var zoomingGraphicFactory = new Factory("ZoomingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
zoomingGraphicFactory.make = function(dataReader)
{
  return new ZoomingGraphic(assets.graphics[dataReader.readNext()],
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()));
};
//a graphic that is tiled and can move around
//1/7/2015



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
//a graphic that makes a picture move about
//9/6/2015



var WipingGraphic = function(picture,startX,startY,driftX,driftY)
{
  this.picture = picture;
  this.startX = startX;
  this.startY = startY;
  this.driftX = driftX;
  this.driftY = driftY;
  this.elapsedTime = 0.0;
};


//displays the PictureGraphic
//screenWidth the width of the screen
//screenHeight the height of the screen
//ctx the rendering context
//deltaTime the time passed
WipingGraphic.prototype.render = function(screenWidth,screenHeight,ctx,
                                           deltaTime)
{
  this.elapsedTime += deltaTime;

  var x = this.startX + this.elapsedTime * this.driftX;
  var y = this.startY + this.elapsedTime * this.driftY;
  var imageWidth = this.picture.getWidth();
  var imageHeight = this.picture.getHeight();

  this.picture.update(deltaTime);
  this.picture.render(x,y,imageWidth,imageHeight,ctx);
};


//makes picture graphics
var wipingGraphicFactory = new Factory("WipingGraphic");


//the function that does the making
//data is a string containing PictureGraphic data or something
wipingGraphicFactory.make = function(dataReader)
 {
  return new WipingGraphic(assets.graphics[dataReader.readNext()],
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()),
                            parseFloat(dataReader.readNext()));
};
//a graphic that fills the whole screen with flashing
//30/6/2015



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


var graphicFactory = new AbstractFactory(
  [
    pictureGraphicFactory,flashingGraphicFactory,multiGraphicFactory,
    zoomingGraphicFactory,tilingGraphicFactory,wipingGraphicFactory
  ]
);


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
  sound = assets.sEs[dataReader.readNext()];
  graphic = graphicFactory.make(dataReader);
  text = dataReader.readNext();

  return new Slide(graphic,sound,text);
};


//creates the cutscene with no arguments
//slides is the slides that make up this CutScene
//next is the factory input for the next scene
var CutScene = function(slides,next)
{
  //static properties
  CutScene.screenWidth = 777;
  CutScene.screenHeight = 555;

  //the data of the scene that comes after this one
  this.next = next;

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

  if (this.slides.length == 0)
  {
    return sceneFactory.make(new StringReader(assets.sceneDatas[this.next].getData()));
  }

  this.slides[0].render(CutScene.screenWidth,CutScene.screenHeight,this.ctx,
                    deltaTime);

  return this;
};


//a factory that makes CutScenes
var cutSceneFactory = new Factory("CutScene");


//the thing that makes the stuff
cutSceneFactory.make = function(dataReader)
{
  var next = dataReader.readNext();

  slides = [];
  while (true)
  {
    data = dataReader.peekNext();
    if (data == "END")
    {
      break;
    }
    slides.push(makeSlide(dataReader));
  }

  return new CutScene(slides,next);
};

const FIRST_SCENE = "start.pig";


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
};


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
      return sceneFactory.make(new StringReader(assets.sceneDatas[FIRST_SCENE].getData()));
    }
  }
  return this;
};


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
  assets.loadSprites("teaching1.png_teaching2.png_face.png_brick.png_sky.png_clock.png_hall.png_");

  assets.loadAnimations("tear.png_3_0.5_walking.png_2_0.5_");

  assets.loadSes("nice.wav_____buzz.wav_heyBilly.wav_inTheMainframe.wav_iNeedYou.wav_");

  assets.loadTilesets("sky.png_32_32_");

  assets.loadSceneDatas("start.pig_drivingToWork.pig_");

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
    console.log(name);
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
//a scene where it's like a danmaku game and shit, yo
//7/7/2015


//a tilemap that looks rather lovely and also works!!
//6/7/2015


//displays tiles, you sick fuck
//6/7/2015




//creates the Tileset
//imageSrc is the source of the image it gets the tiles from
//tileWidth is the width of each tile
//tileHeight is the height of each tile
var Tileset = function(imageSrc,tileWidth,tileHeight)
{
	this.image = new Image();
	this.image.ready = false;
	this.image.onload = function()
	{
		this.ready = true;
		console.log("tileset " + GRAPHIC_DIRECTORY + imageSrc);
	};
	this.image.src = GRAPHIC_DIRECTORY + imageSrc;

	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
};


//renders a tile from the Tileset
//id is the number of the tile
//x is the horizontal position to render to
//y is the vertical position to render to
//ctx is the rendering context
Tileset.prototype.render = function(id,x,y,ctx)
{
	//if it really exists
	if (id < 1)
  {
		return;
  }

	//draw it at the correct location
  ctx.drawImage(this.image,this.tileWidth * (id - 1),0,this.tileWidth,
  			  this.tileHeight,x,y,this.tileWidth,this.tileHeight);
};


//tells you if the Tileset is ready to groove
Tileset.prototype.isReady = function()
{
	return this.image.ready;
};

//creates a Tilemap
//tileset is the tileset it uses to draw the map <3
//data is the data in the Tilemap
var Tilemap = function(tileset,data)
{
	this.tileset = tileset;
	this.data = data;

	this.cX = 0;
	this.cY = 0;
};


//displays the Tilemap
//ctx is the rendering context
//screenWidth is the width of the screen
//screenHeight is the height of the screen
Tilemap.prototype.render = function(ctx,screenWidth,screenHeight)
{
	//render background
	ctx.fillStyle = "rgb(200,200,255)";//TODO: this ain't going to work like this
	ctx.fillRect(0,0,screenWidth,screenHeight);

	//render tiles
	var tX = Math.floor(this.cX / this.tileset.tileWidth);
	var tY = Math.floor(this.cY / this.tileset.tileHeight);
	var tW = Math.floor(screenWidth / this.tileset.tileWidth);
	var tH = Math.floor(screenHeight / this.tileset.tileHeight);

	for (x = 0;x <= tW;x++)
	{
		for (y = 0;y < tH;y++)
		{
			for (z = 0;z < Z_DEPTH;z ++)
			{
				if (tX + x < 0 || tX + x >= this.data.length || tY + y < 0 ||
					tY + y >= this.data[x].length)
				{
					continue;
				}

				this.tileset.render(this.data[tX + x][tY + y][z],(tX + x) *
					this.tileset.tileWidth - this.cX,(tY + y) *
					this.tileset.tileHeight - this.cY,ctx);
			}
		}
	}
};


//tells you if a given rect can pass in this Tilemap
//x is the horizontal position
//y is the vertical position
//w is the width
//h is the height
Tilemap.prototype.passableRect = function(x,y,w,h)
{
	var tX = Math.floor((x + 1) / this.tileset.tileWidth);
	var tY = Math.floor((y + 1) / this.tileset.tileHeight);

	var tW = Math.floor((w + 1) / this.tileset.tileWidth);
	var tH = Math.floor((h + 1) / this.tileset.tileHeight);

	for (var iX = tX;iX <= tX + tW;iX++)
	{
		for (var iY = tY;iY <= tY + tH;iY++)
		{
			if (iX < 0 || iX >= this.data.length || iY < 0 || iY >= this.data[iX].length)
			{
				console.log("you're off the edge of the map, mate");
				continue;
			}

			if (this.data[iX][iY][1] != 0)
			{
				return false;
			}
		}
	}
	return true;
};


//centre's the Tilemap's camera
//x is the horizontal position to centre on
//y is the vertical position to centre on
//screenWidth is the width of the screen
//screenHeight is the height of the screen
Tilemap.prototype.centre = function(x,y,screenWidth,screenHeight)
{
	if (this.ready)
	{
		//set camera x and y so that the given point is in middle of screen
		this.cX = x - canvas.width / 2;
		this.cY = y - canvas.height / 2;

		//make sure the camera doesn't leave the level
		if (this.cX < 0)
			this.cX = 0;

		if (this.cY < 0)
			this.cY = 0;

		if (this.cX > this.data.length * this.tileset.tileWidth - screenWidth)
			this.cX = this.data.length * this.tileset.tileWidth - screenWidth;

		if (this.cY > this.data[0].length * this.tileset.tileHeight - screenHeight)
			this.cY = this.data[0].length * this.tileset.tileHeight - screenHeight;
	}
};


//gives you the width of the Tilemap
Tilemap.prototype.getWidth = function()
{
	return this.data.length * this.tileset.tileWidth;
};


//gives you the height of the Tilemap
Tilemap.prototype.getHeight = function()
{
	return this.data[0].length * this.tileset.tileHeight;
};


//makes Tilemaps
var tilemapFactory = new Factory("Tilemap");


//makes a Tilemap for you meme loving fucks
//dataReader contains all the data it has to read
tilemapFactory.make = function(dataReader)
{
	var tileset = assets.tilesets[dataReader.readNext()]

	var width = parseInt(dataReader.readNext());
	var height = parseInt(dataReader.readNext());

	data = [];

	for (var y = 0;y < height;y++)
	{
		data[x] = [];
		for (var x = 0;x < width;x++)
		{
			data[x][y] = parseInt(dataReader.readNext());
		}
	}
	return new Tilemap(data);
};
//a super prototype for scenes that have a screen
//11/7/2015


//creates the canvas
//screenWidth is the width of the canvas
//screenHeight is the height of the canvas
var CanvasScene = function(screenWidth,screenHeight)
{
  this.canvas = document.createElement("canvas");
  this.canvas.width = screenWidth;
  this.canvas.height = screenHeight;
  document.body.appendChild(this.canvas);
  this.ctx = this.canvas.getContext("2d");
};


//deletes the canvas
CanvasScene.prototype.delete = function()
{
  document.body.removeChild(this.canvas);
};


const DANMAKU_SCENE_WIDTH = 444;
const DANMAKU_SCENE_HEIGHT = 777;


//a bullet that Wizzes around the scene at astounding speed!
//owner is the firer of this bullet
//physics is it's physics component
//renderer is it's renderer component
//mover is it's mover component
//damage is how much damage it does
var Bullet = function(owner,physics,renderer,mover,damage)
{
  this.owner = owner;
  this.physics = physics;
  this.renderer = renderer;
  this.mover = mover;
  this.damage = damage;
};


//DanmakuScene constructor
//tilemap is the tilemap it displays underneath
//bgmSrc is the src of the background music
var DanmakuScene = function(tilemap,bgmSrc)
{
  //create the canvas
  CanvasScene.call(this,DANMAKU_SCENE_WIDTH,DANMAKU_SCENE_HEIGHT);

  //put in all of this thing's things
  this.tilemap = tilemap;

  this.bgm = new Audio(bgmSrc);
  this.bgm.play();

  this.bullets = [];
  this.characters = [];
};


//deletes the danmaku scene
DanmakuScene.prototype.delete = function()
{
  //delete the canvas
  CanvasScene.delete.call(this);

  //TODO: delete stuff I guess
};


//updates the DanmakuScene
//deltaTime is the time since last time
DanmakuScene.prototype.update = function(deltaTime)
{
  this.tilemap.render(this.ctx);

  return this;
};


//a factory that makes DanmakuScenes
var danmakuSceneFactory = new Factory("DanmakuScene");


//makes a DanmakuScene
//dataReader is a StringReader containing the data
danmakuSceneFactory.make = function(dataReader)
{
  var tilemap = tilemapFactory.make(dataReader);
  var bgmSrc = dataReader.readNext();
  return new DanmakuScene(tilemap,bgmSrc);
};


//a factory that makes scenes
var sceneFactory = new AbstractFactory(
  [
    loadingSceneFactory,cutSceneFactory,danmakuSceneFactory
  ]
);


//the frame rate type thing
var deltaTime = 1000.0/30;

//the first scene
var scene = sceneFactory.make(new StringReader("LoadingScene"));

//the main loop of the game
function main()
{
  var newScene = scene.update(deltaTime / 1000);

  if (newScene != scene)
  {
    scene.delete();
    scene = newScene;
  }

  setTimeout(main,deltaTime);
};

main();

/*
Hack the webframe.gif
www.nsa.gif/hack gigagbyte
log in
*/
