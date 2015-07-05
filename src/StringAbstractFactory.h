//a factory that contains more factories that use Strings
//V is the type of thing it makes
//30/5/2015

#ifndef STRING_ABSTRACT_FACTORY_H
#define STRING_ABSTRACT_FACTORY_H

#include "Factory.h"

#include <cheerp/clientlib.h>

#include "StaticMap.h"

using namespace std;
using namespace client;


template <class V> class StringAbstractFactory:public Factory<String,V>
{
public:
  //creates the factory with it's stuff
  //Factory<String,V> * [] an array of pointers to factories
  //int the number of factories in the array
  StringAbstractFactory(Factory<String,V> * [],int);

  //builds something
  //String * the key that denotes what to build
  virtual V * make(String *);

  //gives you the factory's identifier for use in abstract factories
  virtual String * getIdentifier() = 0;

private:
  StaticMap<V> factoryMap;
};

#endif
