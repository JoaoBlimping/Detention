//creates different kinds of Graphic
//30/5/2015

#ifndef GRAPHIC_FACTORY_H
#define GRAPHIC_FACTORY_H


#include "../StringAbstractFactory.h"
#include "Graphic.h"

#include <cheerp/clientlib.h>

using namespace client;


class GraphicFactory:public StringAbstractFactory<Graphic>
{
public:
  //creates the graphic factory
  GraphicFactory();

  //builds something
  //String * the key that denotes what to build
  virtual Graphic * make(String *);

  //gives you the factory's identifier for use in abstract factories
  virtual String * getIdentifier();

private:
  //all of the factories that make the graphics
  static Factory<String,Graphic> * factories[];

  //the number of factories
  static int nFactories;

  //it's identifier
  static String identifier;
};

#endif
