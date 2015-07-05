//this is the scene where the actual gameplay and stuff occurs
//27/5/2015

#ifndef GAME_SCENE_H
#define GAME_SCENE_H

#include "CanvasScene.h"
#include <cheerp/clientlib.h>

using namespace client;

class GameScene:public CanvasScene
{
public:
  //makes the game scene
  GameScene();

  //deletes all of the game scene's rubbish
  virtual ~GameScene();

  //updates the game scene
  virtual Scene * update(float);

private:
  static String * backgroundColour;       //the background colour
  static int const CANVAS_WIDTH;          //the width of the canvas
  static int const CANVAS_HEIGHT;         //the height of the canvas
};

#endif
