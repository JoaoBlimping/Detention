//a prototype for a thing that makes stuff
//9/6/2015


//makes a factory with a name
var Factory = function(identifier)
{
  this.identifier = identifier;
};


//you are meant to override this to make it make whatever your heart desires!
//data the content to make it from
Factory.prototype.make = function(dataReader)
{
  console.log("Factory.make is meant to be overridden");
};
