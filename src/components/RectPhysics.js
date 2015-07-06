//a component that makes up the physics aspect of an Entity
//6/7/2015


$include Level.js$


var PhysicsComponent = function(x,y,w,h)
{
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vX = 0.0;
  this.vY = 0.0;
};


//tells you if two PhysicsComponents are colliding
PhysicsComponent.prototype.isColliding = function(other)
{
  //TODO: actually make this work, it's just two of these rects
  return false;
};


PhysicsComponent.prototype.isCollidingWithLevel = function(level)
{
  //TODO: actually make this work, it's just the rect colliding with the level
  return false;
};
