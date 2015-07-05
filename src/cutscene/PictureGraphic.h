//a graphic that draws a picture
//29/5/2015

#ifndef PICTURE_GRAPHIC_H
#define PICTURE_GRAPHIC_H

#import "Graphic.h"
#import "../Factory.h"

#import <cheerp/clientlib.h>

using namespace client;


class PictureGraphic:public Graphic
{
public:
  //display the graphic
  //CanvasRenderingContext2D * is used to draw
  //int width of drawing area
  //int height of drawing area
  //float elapsed time
  virtual void render(CanvasRenderingContext2D *,int,int,float);

  //tells you if the graphic is loaded and ready to display
  virtual bool isLoaded();

private:
  HTMLImageElement * image;
};


class PictureGraphicFactory:public Factory<String,Graphic>
{
public:
  //makes the thing
  //String * the key that denotes the thing to make
  virtual Graphic * make(String *);

  //gives you the factory's identifier for use in abstract factories
  virtual String * getIdentifier();

private:
  //the factory's identifier
  static String identifier;
};

#endif
