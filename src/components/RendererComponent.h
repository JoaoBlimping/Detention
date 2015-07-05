//renders a thing
//21/5/2015

#ifndef RENDERER_COMPONENT_H
#define RENDERER_COMPONENT_H

#include <cheerp/clientlib.h>

using namespace client;

class RendererComponent
{
public:
  //renders the thing
  void render(PositionComponent const * const,CanvasRenderingContext2D * const,
              float) const;
};

#endif
