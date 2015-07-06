//deals with input
//6/7/2015


var heldTime;
var held = false;

//keyboard listener
var keysDown = {};

addEventListener("keydown", function (e)
{
	keysDown[e.keyCode] = true;//HACK:pingaz

	//stop screen from scrolling
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
	{
        e.preventDefault();
    }

}, false);

addEventListener("keyup", function (e)
{
	delete keysDown[e.keyCode];
}, false);
