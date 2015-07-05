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
