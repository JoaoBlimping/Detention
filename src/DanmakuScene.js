//a scene where it's like a danmaku game and shit, yo
//7/7/2015


var DanmakuScene = function(tilemap,bGMSrc)
{
  this.tilemap = tilemap;

  this.bGM = new Audio(bGMSrc);
  this.bGM.play();
};
