//a thing that plays sounds properly
//8/6/2015


//creates the SoundPlayer
//src is the sound file it plays
var SoundPlayer = function(src)
{
  this.sound = new Audio(src);
  this.sound.ready = false;
  this.sound.playing = false;

  //when the sound can play all the way through
  this.sound.oncanplaythrough = function()
  {
    this.ready = true;
  };

  //when the sound finishes playing
  this.sound.onended = function()
  {
    this.playing = false;
  };

};

//plays the sound
SoundPlayer.prototype.play = function()
{
  if (this.sound.ready)
  {
    this.sound.currentTime = 0;
    this.sound.play();
    this.sound.playing = true;
  }
};


//tells you if the sound is ready to play
SoundPlayer.prototype.isReady = function()
{
  return this.sound.ready;
};


//tells you if the sound is currently playing
SoundPlayer.prototype.isPlaying = function()
{
  return this.sound.playing;
}
