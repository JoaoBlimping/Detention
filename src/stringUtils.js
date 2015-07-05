//some utilities for strings
//10/6/2015


//tells you if a character is whitespace
//returns true iff it is
function isWhitespace(char)
{
  return (char == '_' || char == '\n');
};


//a class that lets you read strings while not destroying them and stuff
//rawString is the string that it reads
var StringReader = function(rawString)
{
  this.rawString = rawString;
  this.currentIndex = 0;
};


//tells you if the StringReader still has more to read
StringReader.prototype.hasNext = function()
{
  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    if (!isWhitespace(this.rawString.charAt(i)))
    {
      return true;
    }
  }
  return false;
};


//gives you the next token in the string if it has one, then goes to the next
StringReader.prototype.readNext = function()
{
  var start = -1;
  var end = -1;

  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    char = this.rawString.charAt(i);

    //test for the start of the token
    if (!isWhitespace(char) && start == -1)
    {
      start = i;
    }

    //test for the end of the token
    if (isWhitespace(char) && start != -1)
    {
      this.currentIndex = i;
      return this.rawString.substring(start,this.currentIndex);
    }
  }
  this.currentIndex = this.rawString.length;
  return this.rawString.substring(start);
};


//gives you the next token in the string if it has one
StringReader.prototype.peekNext = function()
{
  var start = -1;
  var end = -1;

  for (i = this.currentIndex;i < this.rawString.length;i++)
  {
    char = this.rawString.charAt(i);

    //test for the start of the token
    if (!isWhitespace(char) && start == -1)
    {
      start = i;
    }

    //test for the end of the token
    if (isWhitespace(char) && start != -1)
    {
      return this.rawString.substring(start,i);
    }
  }
  return this.rawString.substring(start);
};
