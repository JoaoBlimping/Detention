//the parameters of a Mob
//21/5/2015

#ifndef PARAMETER_COMPONENT_H
#define PARAMETER_COMPONENT_H

class ParameterComponent
{
public:
  //makes it with no values
  ParameterComponent():
  hp(0)
  {};

  //makes it with a hp value
  ParameterComponent(int hp):
  hp(hp)
  {};

private:
  int hp;       //the thing's hp
};

#endif
