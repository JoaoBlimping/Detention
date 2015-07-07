//loads things somehow
//9/6/2015


//creates the dataloader
//url is the address of the data to load
var DataLoader = function(url)
{
  this.iframe = document.createElement("iframe");
  document.body.appendChild(this.iframe);
  this.iframe.src = url;
  this.iframe.hidden = true;
  this.iframe.ready = false;
  this.iframe.owner = this;
  this.iframe.onload = function()
  {
    this.ready = true;
  };
};


//tells you if the loader is ready yet
//return true iff it is
DataLoader.prototype.isReady = function()
{
  return this.iframe.ready;
};

//gets you the data that it loaded
//return the data
DataLoader.prototype.getData = function()
{
  if (!this.isReady())
  {
    console.log("bloody ebola");
    return 666;
  }

  var iDocument = this.iframe.contentDocument || this.iframe.contentWindow.document;
  return iDocument.getElementsByTagName("pre")[0].innerHTML;
};
