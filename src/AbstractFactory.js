//a factory that is made of more factories!! pingazzzzzzz
//10/6/2015

$include stringUtils.js$


//sets the factories that the factory uses
var AbstractFactory = function(factories)
{
  this.factories = factories;
};


//makes something from the factory
//data the data used, the first token is the concrete factory's name
AbstractFactory.prototype.make = function(dataReader)
{
  factory = dataReader.readNext();

  for (i = 0;i < this.factories.length;i++)
  {
    if (factory == this.factories[i].identifier)
    {
      return this.factories[i].make(dataReader);
    }
  }

  console.log("no factory named "+factory);
  return 0;
};
