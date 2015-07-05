//a homemade map class because the real one is fucked
//it's statically allocated cos that's easier, but it should be ok for my uses
//2/6/2015

#ifndef MAP_H
#define MAP_H

#include <cheerp/clientlib.h>

using namespace client;


template <class V> class StaticMap
{
public:
  //creates the StaticMap with all of the stuff put right in
  //String * an array of keys
  //V * an array of values
  //int the length of the map
  StaticMap(String *,V *,int);

  //gets the thing at a certain key, but returns null if it's not there
  //String * key that corresponds to the value to get
  V * operator[](String *) const;

private:
  String * keys;          //holds all of the keys
  V * values;             //holds all of the values
  int n;                  //the number of things in the map
};

#endif
