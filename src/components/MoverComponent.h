//the component of an entity that controls how they move
//20/5/2015

#ifndef MOVER_COMPONENT_H
#define MOVER_COMPONENT_H

#include "PositionComponent.h"

class MoverComponent
{
public:
  //makes a thing move
  void update(PositionComponent * const,float) const;
};

#endif
