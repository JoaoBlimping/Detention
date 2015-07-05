#include "Mob.h"

#include <cheerp/clientlib.h>

#include "components/PositionComponent.h"
#include "components/ParameterComponent.h"
#include "components/MoverComponent.h"
#include "components/RendererComponent.h"

using namespace client;

Mob::Mob(int x,int y,int hp,MoverComponent const * const mover,
         RendererComponent const * const renderer):
mover(mover),
renderer(renderer)
{
  position = new PositionComponent(x,y);
  parameters = new ParameterComponent(hp);
}

Mob::~Mob()
{
  delete position;
  delete parameters;
}

void Mob::update(float deltaTime)
{
  mover->update(position,deltaTime);
}

void Mob::render(CanvasRenderingContext2D * const context,float deltaTime)
{
  renderer->render(position,context,deltaTime);
}
