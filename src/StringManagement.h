//just contains some methods for managing cheerp Strings
//31/5/2015

#include <cheerp/clientlib.h>

using namespace client;


namespace StringManagement
{
  //gives you the next token in a String and removes it
  //String ** pointer to pointer to the current String
  String * getNextToken(String **);

  //tells you if the String has any more tokens
  //String * pointer to the string to check
  bool hasNextToken(String *);

  //tells you if a character is whitespace
  //char the character to test
  bool isWhiteSpace(char);

  //tells you if two strings are equal
  //String * the first string
  //String * the second string
  bool equal(String *,String *);
}
