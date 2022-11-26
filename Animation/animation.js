"use strict";

var Cloud = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Cloud.start = function () {
	// Get the canvas and it's context.
    Cloud.canvas = document.getElementById("myCanvas");
    Cloud.canvasContext = Cloud.canvas.getContext("2d");
	
	// Seup the rain to be displayed.
    Cloud.sprite = rain;
	
	// Attach the image to be used for the sprite.
	Cloud.sprite.img = new Image();
    Cloud.sprite.img.src = Cloud.sprite.src;
	
	// Wait till the rain image is loaded before starting the animation.
	Cloud.sprite.img.onload = function() {		
		Cloud.sprite.offset=-Cloud.sprite.frames[Cloud.sprite.frame].frame.w;
    	Cloud.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the Cloud.
document.addEventListener( 'DOMContentLoaded', Cloud.start);

Cloud.clearCanvas = function () {
    Cloud.canvasContext.fillStyle = "white";
    Cloud.canvasContext.fillRect(0, 0, Cloud.canvas.width, Cloud.canvas.height);
};

Cloud.mainLoop = function() {
    Cloud.clearCanvas();
    Cloud.update();
    Cloud.draw();
	
	
    window.setTimeout(Cloud.mainLoop, 1000 /25);
};

Cloud.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Cloud.canvas.width = window.innerWidth;

	
	// Set the location of the next frame. 
  	Cloud.sprite.offset+=12;
	if(Cloud.sprite.offset>Cloud.canvas.width)
 		Cloud.sprite.offset=-Cloud.sprite.frames[Cloud.sprite.frame].frame.w;
};

Cloud.draw = function () {
	Cloud.canvasContext.drawImage(Cloud.sprite.img,Cloud.sprite.frames[Cloud.sprite.frame].frame.x,Cloud.sprite.frames[Cloud.sprite.frame].frame.y,Cloud.sprite.frames[Cloud.sprite.frame].frame.w,Cloud.sprite.frames[Cloud.sprite.frame].frame.h,Cloud.sprite.offset,0,Cloud.sprite.frames[Cloud.sprite.frame].frame.w,Cloud.sprite.frames[Cloud.sprite.frame].frame.h);
	
	// Advance to the next frame.
	Cloud.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Cloud.sprite.frame==Cloud.sprite.frames.length)
		Cloud.sprite.frame=0;
};

