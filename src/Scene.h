//a scene that can fill the screen <3
//lovingly baked on 19/5/2015

#ifndef SCENE_H
#define SCENE_H

class Scene
{
public:
  //does nothing, but is necessary for some reason
  virtual ~Scene(){};

  //the updatement of the scene
  //float time since last time
  virtual Scene * update(float) = 0;
};

#endif
