#include "PictureGraphic.h"


//
//PictureGraphic's members
//
void PictureGraphic::render(CanvasRenderingContext2D * context,int width,
                            int height,float deltaTime)
{
  context->drawImage(image,0,0,width,height);
}


bool PictureGraphic::isLoaded()
{
  return true;//TODO make this actually check
}


//
//PictureGraphicFactory's members
//
Graphic * PictureGraphicFactory::make(String *)
{
  //TODO make this do stuff
  return 0;
}


String * PictureGraphicFactory::getIdentifier()
{
  return &identifier;
}


String PictureGraphicFactory::identifier("PICTURE_GRAPHIC_FACTORY");
