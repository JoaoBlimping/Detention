//a factory that makes slides
//31/5/2015

#ifndef SLIDE_FACTORY_H
#define SLIDE_FACTORY_H

#include "../Factory.h"

#include "Slide.h"
#include "GraphicFactory.h"

#include <cheerp/clientlib.h>

using namespace client;


class SlideFactory:public Factory<String,Slide>
{
public:
  //makes the thing
  //String * the key that denotes the thing to make
  virtual Slide * make(String *);

  //gives you the factory's identifier for use in abstract factories
  virtual String * getIdentifier();

private:
  GraphicFactory graphicFactory;
  static String identifier;
};

#endif
