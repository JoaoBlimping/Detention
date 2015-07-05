//a scene where you log in
//20/5/2015

#ifndef MENU_SCENE_H
#define MENU_SCENE_H

#include "Scene.h"
#include <cheerp/clientlib.h>

using namespace client;


class MenuScene:public Scene
{
public:
  //creates the MenuScene
  MenuScene();

  //destroys the MenuScene
  virtual ~MenuScene();

  //updates the MenuScene
  virtual Scene * update(float);

private:
  HTMLElement * title;          //contains the title
  HTMLElement * subtitle;       //contains the subtitle
  HTMLImageElement * button;    //contains the button you click
  HTMLElement * bottom;         //contains text at the bottom

  HTMLAudioElement * sound;     //the smashing glass sound

  float countDown = -1;         //countdown until the game starts
};


#endif
