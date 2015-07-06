//a component that renders entities
//6/7/2015


$include components/PhysicsComponent.js$


var PictureRenderComponent = function(picture)
{
  this.picture = picture;
};


//renders this RenderComponent at the right place
//physics is the entity's physics component
//cX is the camera's x position
//cY is the camera's y position
//deltaTime is the time since last time
PictureRenderComponent.prototype.render = function(physics,cX,cY,deltaTime)
{

};
