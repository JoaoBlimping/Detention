//a factory that makes things
//K is the type of  key it uses to make it
//V is the type of thing it makes
//30/5/2015

#ifndef FACTORY_H
#define FACTORY_H

template <class K,class V> class Factory
{
public:
  //makes the thing
  //K * the key that denotes the thing to make
  virtual V * make(K *) = 0;

  //gives you the factory's identifier for use in abstract factories
  virtual K * getIdentifier() = 0;
};

#endif
