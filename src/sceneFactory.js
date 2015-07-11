//contains an abstract factory that makes scenes of various specifications
//6/7/2015


$include AbstractFactory.js$
$include LoadingScene.js$
$include CutScene.js$
$include DanmakuScene.js$


//a factory that makes scenes
var sceneFactory = new AbstractFactory(
  [
    loadingSceneFactory,cutSceneFactory,danmakuSceneFactory
  ]
);
