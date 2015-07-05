#include "CutScene.h"

#include <cheerp/clientlib.h>
#include <cheerp/client.h>

#include "cutscene/SlideFactory.h"

using namespace client;
using namespace cheerp;


CutScene::CutScene(int canvasWidth,int canvasHeight,Slide * slides,int nSlides):
CanvasScene(canvasWidth,canvasHeight),
slides(slides),
nSlides(nSlides),
currentSlide(0)
{}

CutScene::~CutScene()
{

}

Scene * CutScene::update(float deltaTime)
{
  return this;
}


CutScene * buildCutScene(String * filename)
{
  //Synchronous mode
  XMLHttpRequest * xhr=new client::XMLHttpRequest();
  xhr->open("GET","assets/cutscenes/1.pig",false);
  xhr->send();
  String * response = xhr->get_responseText();

  console.log(response);

  return 0;
}
