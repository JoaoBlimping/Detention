//a factory that makes cutscenes
//31/5/2015

#ifndef CUT_SCENE_FACTORY_H
#define CUT_SCENE_FACTORY_H

#include "Factory.h"

#include "CutScene.h"
#include "cutscene/SlideFactory.h"


class CutSceneFactory:public Factory<String,CutScene>
{
public:
  //makes the thing
  //String * the key that denotes the thing to make
  virtual CutScene * make(String *);

  //gives you the factory's identifier for use in abstract factories
  virtual String * getIdentifier();

private:
  SlideFactory slideFactory;
};

#endif
