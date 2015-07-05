//an abstract scene that has a canvas in it
//28/5/2015

#ifndef CANVAS_SCENE_H
#define CANVAS_SCENE_H

#include "Scene.h"

#include <cheerp/clientlib.h>

using namespace client;


class CanvasScene:public Scene
{
public:
  CanvasScene(int,int);

  //does nothing, but is necessary for some reason
  virtual ~CanvasScene();

  //the updatement of the scene
  //float time since last time
  virtual Scene * update(float) = 0;

protected:
  HTMLCanvasElement * canvas;             //the canvas to draw on
  CanvasRenderingContext2D * context;     //the canvas's drawing thingo
};

#endif
