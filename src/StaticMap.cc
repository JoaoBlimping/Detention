#include "StaticMap.h"

#include <cheerp/clientlib.h>

#include "StringManagement.h"

using namespace client;
using namespace StringManagement;


template <class V> V * StaticMap<V>::operator[](String * key) const
{
  for (int i = 0;i < n;i++)
  {
    if (equal(key,keys[i]))
    {
      return values[i];
    }
  }
}
