//a factory that makes graphics
//9/6/2015

$include AbstractFactory.js$
$include cutscene/PictureGraphic.js$
$include cutscene/FlashingGraphic.js$
$include cutscene/ZoomingGraphic.js$
$include cutscene/TilingGraphic.js$
$include cutscene/WipingGraphic.js$
$include cutscene/MultiGraphic.js$


var graphicFactory = new AbstractFactory(
  [
    pictureGraphicFactory,flashingGraphicFactory,multiGraphicFactory,
    zoomingGraphicFactory,tilingGraphicFactory,wipingGraphicFactory
  ]
);
