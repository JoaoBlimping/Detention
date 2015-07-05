#include "SlideFactory.h"

#include <cheerp/clientlib.h>

#include "../StringManagement.h"
#include "Slide.h"


using namespace client;
using namespace StringManagement;


Slide * SlideFactory::make(String * data)
{
  //make the audio part
  HTMLAudioElement * audio = static_cast<HTMLAudioElement *>(document.createElement("audio"));
  audio->set_src(getNextToken(&data));

  //make the graphics part
  Graphic * graphic = graphicFactory.make(data);

  //make the text part
  String * text = getNextToken(&data);

  //now make the actual thing
  return new Slide(audio,graphic,text);
}


String * SlideFactory::getIdentifier()
{
  return &identifier;
}


String SlideFactory::identifier("SLIDE_FACTORY");
