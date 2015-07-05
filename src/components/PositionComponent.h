//stores a position
//21/5/2015

#ifndef POSITION_COMPONENT_H
#define POSITION_COMPONENT_H

class PositionComponent
{
public:
  //makes one with a blank position
  PositionComponent():
  x(0),
  y(0)
  {};

  //makes one with given positions
  PositionComponent(int x,int y):
  x(x),
  y(y)
  {};

private:
  float x;
  float y;
};

#endif
