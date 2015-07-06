//a component that renders entities
//6/7/2015


//creates the PictureRenderer
//picture is the picture it renders
var PictureRenderer = function(picture)
{
  this.picture = picture;
};


//renders this RenderComponent at the right place
//physics is the entity's physics component
//cX is the camera's x position
//cY is the camera's y position
//ctx is the rendering context thing
//deltaTime is the time since last time
PictureRenderer.prototype.render = function(physics,cX,cY,ctx,deltaTime)
{
  this.picture.render(physics.x - cX,physics.y - cY,physics.w,physics.h,ctx);
};
