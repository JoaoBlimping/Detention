#include "StringAbstractFactory.h"

#include <cheerp/clientlib.h>

#include "StringManagement.h"

using namespace client;
using namespace StringManagement;

//TODO clean this the fuck up
template <class V> StringAbstractFactory<V>::StringAbstractFactory(Factory<String,V> * factories[],
                                                                   int nFactories)
{
  for (int i = 0;i < nFactories;i++)
  {
    factoryMap[factories[i].getIdentifier()] = factories[i];
  }
}

template <class V> V * StringAbstractFactory<V>::make(String * data)
{
  String * factoryKey = getNextToken(&data);

  Factory<String,V> selectedFactory = *factoryMap[factoryKey];

  return selectedFactory.make(data);
}
