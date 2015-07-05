//Contains the first function to run
//19/5/2015

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "Scene.h"
#include "MenuScene.h"
#include "StringManagement.h"

using namespace client;
using namespace cheerp;
using namespace StringManagement;

//the loop of the game
void gameLoop();

//the game's current scene
Scene * scene;

//the game's framerate
float deltaTime = 0.02f;

//starting point of the program
void webMain()
{
  scene = new MenuScene();
  window.setTimeout(Callback(gameLoop),deltaTime);
}

void gameLoop()
{
  Scene * newScene = scene->update(deltaTime);
  if (newScene != scene)
  {
    delete scene;
    scene = newScene;
  }

  //do it again
  window.setTimeout(Callback(gameLoop),deltaTime);
}
