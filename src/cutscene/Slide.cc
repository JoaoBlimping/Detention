#include "Slide.h"

#include <cheerp/clientlib.h>

using namespace client;


Slide::Slide(HTMLAudioElement * sound,Graphic * graphic,String * text):
sound(sound),
graphic(graphic),
text(text)
{}

Slide::~Slide()
{
  //TODO probably need to delete these things
}

void Slide::render(CanvasRenderingContext2D * context)
{

}

bool Slide::isFinished()
{
  //TODO make this actually check if it's finished
  return false;
}
