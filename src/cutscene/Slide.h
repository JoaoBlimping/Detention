//a slide in the cutscene
//28/5/2015

#ifndef SLIDE_H
#define SLIDE_H

#include <cheerp/clientlib.h>

#include "Graphic.h"

using namespace client;


class Slide
{
public:
  //gives the slide all the stuff it needs
  //HTMLAudioElement * the sound it makes
  //Graphic * the visual part of the Slide
  //String * the writing on the Slide
  Slide(HTMLAudioElement *,Graphic *,String *);

  //destroys all the stuff in the slide
  ~Slide();

  //displays the slide
  //CanvasRenderingContext2D * is used to draw
  void render(CanvasRenderingContext2D *);

  //tells you if the slide is finished yet
  bool isFinished();

private:
  HTMLAudioElement * sound;     //the slide's sound
  Graphic * graphic;            //the slide's graphics
  String * text;                //the slide's text
};

#endif
