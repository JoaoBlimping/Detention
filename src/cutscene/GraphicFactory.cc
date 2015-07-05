#include "GraphicFactory.h"

#include <cheerp/clientlib.h>

#include "Graphic.h"
#include "PictureGraphic.h"

using namespace client;


GraphicFactory::GraphicFactory():
StringAbstractFactory<Graphic>(factories,nFactories)
{}

Graphic * GraphicFactory::make(String * data)
{
  return 0;
}


String * GraphicFactory::getIdentifier()
{
  return &identifier;
}


Factory<String,Graphic> * GraphicFactory::factories[] =
{
  new PictureGraphicFactory()
};


int GraphicFactory::nFactories = 1;


String GraphicFactory::identifier("GRAPHIC_FACTORY");
