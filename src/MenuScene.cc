#include "MenuScene.h"

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "GlobalFactories.h"

using namespace client;
using namespace cheerp;


MenuScene::MenuScene()
{
  HTMLElement * body = document.get_body();

  //title
  title = document.createElement("h1");
  title->set_textContent("Detention!");

  //subtitle
  subtitle = document.createElement("h2");
  subtitle->set_textContent("the Family Favourite Corporal Punishment Game");

  //picture
  button = static_cast<HTMLImageElement *>(document.createElement("img"));
  button->set_src("assets/begin.png");
  button->set_alt("press it or die");
  button->set_onclick(Callback([this]()
  {
    countDown = 5;
    sound->play();
  }));

  //bottom text
  bottom = document.createElement("div");

  //add them in
  body->appendChild(title);
  body->appendChild(subtitle);
  body->appendChild(button);
  body->appendChild(bottom);

  //load the breaking glass sound
  sound = static_cast<HTMLAudioElement *>(document.createElement("audio"));
  sound->set_src(new String("assets/se/smash.wav"));
}

MenuScene::~MenuScene()
{
  //remove the html elements from the document
  HTMLElement * body = document.get_body();
  body->removeChild(title);
  body->removeChild(subtitle);
  body->removeChild(button);
  body->removeChild(bottom);
}

Scene * MenuScene::update(float deltaTime)
{
  if (countDown > 0)
  {
    countDown -= deltaTime;

    //add another fuck yeah!
    HTMLElement * fuckYeah = document.createElement("h2");
    fuckYeah->set_textContent("fuck yeah!");
    bottom->appendChild(fuckYeah);
    window.scrollTo(0,document.get_body()->get_scrollHeight());

    //if it's time to go
    if (countDown <= 0)
    {
      return GlobalFactories::cutSceneFactory.make(new String("ebola"));
    }
  }
  return this;
}
