#include "CanvasScene.h"

#include <cheerp/clientlib.h>

using namespace client;


CanvasScene::CanvasScene(int canvasWidth,int canvasHeight)
{
  HTMLElement * body = document.get_body();

  //add the canvas into the mix!!!!
  canvas = static_cast<HTMLCanvasElement *>(document.createElement("canvas"));
  canvas->set_width(canvasWidth);
  canvas->set_height(canvasHeight);

  context = static_cast<CanvasRenderingContext2D *>(canvas->getContext("2d"));

  //add the canvas
  body->appendChild(canvas);
}


CanvasScene::~CanvasScene()
{
  HTMLElement * body = document.get_body();

  //remove the canvas
  body->removeChild(canvas);
}
