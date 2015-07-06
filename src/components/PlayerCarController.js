//controls the player's car
//6/7/2015


$include input.js$


var PlayerCarController = function(shoot,up,down,left,right)
{
	this.shoot = shoot;
	this.up = up;
  this.down = down;
  this.left = left;
  this.right = right;
};


//does the controlling of the entity
//physics is the entity's physics component
//parameters is the entity's parameters component
PlayerCarController.prototype.update = function(physics,parameters,level,
                                                deltaTime)
{
  physics.vY = -1 * parameters.speed;

  //TODO: figure out where keysDown is meant to come from

  if (this.up in keysDown)
  {
    physics.vY = -2 * parameters.speed;
  }

  if this.down in keysDown)
  {
    physics.vY = 0;
  }

	if (this.left in keysDown)
	{
    physics.vX = -1 * parameters.speed;
	}

	if (this.right in keysDown)
	{
    physics.vX = parameters.speed;
	}

	if (this.shoot in keysDown)
	{
		this.gun.shoot(entity);
	}

};
