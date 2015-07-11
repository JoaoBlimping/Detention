//the main loop of the program
//6/6/2015


$include stringUtils.js$
$include sceneFactory.js$


//the frame rate type thing
var deltaTime = 1000.0/30;

//the first scene
var scene = sceneFactory.make(new StringReader("LoadingScene"));

//the main loop of the game
function main()
{
  var newScene = scene.update(deltaTime / 1000);

  if (newScene != scene)
  {
    scene.delete();
    scene = newScene;
  }

  setTimeout(main,deltaTime);
};

main();

/*
Hack the webframe.gif
www.nsa.gif/hack gigagbyte
log in
*/
