//an animated sprite thing
//7/6/2015


//src is the source of the image
//nFrames is the number of nFrames
//length is the length in seconds it goes for
var Animation = function(src,nFrames,length)
{
	this.nFrames = nFrames;
	this.length = length;
	this.currentTime = 0;

	this.image = new Image();
	this.image.ready = false;
  this.image.src = src;
	this.image.onload = function()
	{
		this.ready = true;
		console.log("animation "+src+" loaded");
	};
};

//updates the animation
//deltaTime is the elapsed time
Animation.prototype.update = function(deltaTime)
{
	this.currentTime += deltaTime;
	while (this.currentTime > this.length)
	{
		this.currentTime -= this.length;
	}
};

//renders the animation on the given context
//x is the horizontal position
//y is the vertical position
//w is the width of the animation
//h is the height of the animation
//ctx is the canvas rendering context
Animation.prototype.render = function(x,y,w,h,ctx)
{
	if (this.image.ready)
	{
		var frameWidth = this.image.width / this.nFrames;
		var frameIndex = Math.floor((this.currentTime / this.length) * this.nFrames);

		ctx.drawImage(this.image,frameWidth * frameIndex,0,
                  this.image.width / this.nFrames,this.image.height,x,y,w,h);
	}
};

//tells you if the animation is ready yet
//returns true when it is
Animation.prototype.isReady = function()
{
	return this.image.ready;
};
