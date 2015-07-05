#include "GameScene.h"

#include <cheerp/clientlib.h>

using namespace client;

GameScene::GameScene():
CanvasScene(CANVAS_WIDTH,CANVAS_HEIGHT)
{
  context->set_fillStyle(new String("rgb(255,0,255)"));
  context->fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

GameScene::~GameScene()
{}//does nothing so far

Scene * GameScene::update(float deltaTime)
{
  //do some shit and stuff

  //if nothing thrilling has happened, just return the same scene
  return this;
}

String * GameScene::backgroundColour = new String("rgb(255,0,0)");

int const GameScene::CANVAS_WIDTH = 800;

int const GameScene::CANVAS_HEIGHT = 500;
