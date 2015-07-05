//a graphic that can appear in a slide
//29/5/2015

#ifndef GRAPHIC_H
#define GRAPHIC_H

#include <cheerp/clientlib.h>

using namespace client;


class Graphic
{
public:
  //display the graphic
  //CanvasRenderingContext2D * is used to draw
  //int width of drawing area
  //int height of drawing area
  //float elapsed time
  virtual void render(CanvasRenderingContext2D *,int,int,float) = 0;

  //tells you if the graphic is loaded and ready to display
  virtual bool isLoaded() = 0;
};

#endif
