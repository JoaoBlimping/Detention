//an enemy or player that moves around and attacks and stuff
//20/5/2015

#ifndef MOB_H
#define MOB_H

#include <cheerp/clientlib.h>

#include "components/PositionComponent.h"
#include "components/ParameterComponent.h"
#include "components/MoverComponent.h"
#include "components/RendererComponent.h"

using namespace client;

class Mob
{
public:
  //creates the Mob
  Mob(int x,int y,int hp,MoverComponent const * const,
      RendererComponent const * const);

  //destroys some of the mob's things
  ~Mob();

  //updates the Mob
  void update(float);

  //displays the Mob
  void render(CanvasRenderingContext2D * const,float);

private:
  PositionComponent * position;     //position of the Mob
  ParameterComponent * parameters;  //parameters of the Mob
  MoverComponent const * mover;     //mover of the Mob
  RendererComponent const * renderer;   //renders the Mob
};

#endif
