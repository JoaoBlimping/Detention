#include "StringManagement.h"

#include <cheerp/clientlib.h>

using namespace client;


String * StringManagement::getNextToken(String ** data)
{
  int start = -1;
  int end = -1;

  String * actualData = *data;

  for (int i = 0;i < actualData->get_length();i++)
  {
    char c = actualData->charCodeAt(i);

    //test for the start of the token
    if (!isWhiteSpace(c) && start == -1)
    {
      start = i;
    }

    //test for the end of the token
    if (isWhiteSpace(c) && start != -1)
    {
      end = i;
      String * token = actualData->substring(start,end);

      String * alteredData = actualData->substring(end + 1);

      *data = alteredData;
      return token;
    }
  }
  return *data;
}


bool StringManagement::hasNextToken(String * data)
{
  for (int i = 0;i < data->get_length();i++)
  {
    if (!isWhiteSpace(data->charCodeAt(i)))
    {
      return true;
    }
  }
  return false;
}


bool StringManagement::isWhiteSpace(char c)
{
  return (c == 95 || c == 10);
}


bool StringManagement::equal(String * a,String * b)
{
  for (int i = 0;i < a->get_length();i++)
  {
    if (a->charCodeAt(i) != b->charCodeAt(i))
    {
      return false;
    }
  }
  return true;
}
