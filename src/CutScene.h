//a scene that plays nice little cutscenes
//28/5/2015

#ifndef CUT_SCENE_H
#define CUT_SCENE_H

#include "CanvasScene.h"

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "StringAbstractFactory.h"
#include "cutscene/Slide.h"

using namespace client;
using namespace cheerp;


class CutScene:public CanvasScene
{
public:
  //creates the cutscene
  CutScene(int,int,Slide *,int);

  //destroys all of the cutscene's stuff
  virtual ~CutScene();

  //the updatement of the scene
  //float time since last time
  virtual Scene * update(float);

private:
  Slide * slides;                   //the array of cutscene slides
  int nSlides;                      //the number of slides
  int currentSlide;                 //the slide that it is up to
};

#endif
