//a tilemap that looks rather lovely and also works!!
//6/7/2015


$include Tileset.js$
$include Factory.js$

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
	var tileset = 

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
