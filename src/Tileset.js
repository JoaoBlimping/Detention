//displays tiles, you sick fuck
//6/7/2015


$include assets.js$


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
