
var can = document.getElementById("Canvas");

var context = can.getContext("2d");

function morning() {
    background(); 
    drawSun();
    for (let i = 0; i < 3; i++) {
        cloud(180+i*400,300)
    }
    tree();
    cabin();
    context.font = "30px Arial";
    context.fillStyle = "darkblue"
    context.fillText("Good Morning", 500, 50);
}

function background() {
    context.beginPath();
    context.rect(0, 0, 700, 600);
    context.fillStyle = "skyblue";
    context.fill();
}

function drawSun() {
    // draw the colored region
    context.beginPath();
    context.arc(100, 100, 80, 0, 2 * Math.PI, true);
    context.fillStyle = "yellow";
    context.fill();
 
    // draw the stroke
    context.lineWidth = 5;
    context.strokeStyle = "yellow";
    context.stroke();
}

function cloud(x,y){
    context.save();
    context.scale(0.55,0.55);
    context.shadowColor = "grey";
    context.shadowOffsetX = -5;
    context.beginPath();
    context.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    context.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    context.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    context.moveTo(x + 200, y + 60);
    context.lineTo(x, y + 60);
    context.fillStyle = 'white';
    context.fill()
    context.restore();
}

function drawTriangle(x, y, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 100, y-100);
    context.lineTo(x + 200, y);
    context.fill();
}

function tree(){
    context.fillStyle = "brown";
    context.fillRect(110, 360, 40, 500);
    for (let i = 0; i < 3; i++) {
        drawTriangle(30, 400+i*55, "green"); 
    }
}

function drawSqure(x,y,width,height,lineWidth,strokeStyle,fillStyle) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();

    // the outline
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
    context.stroke();
 
    // the fill color
    context.fillStyle = fillStyle;
    context.fill();
}

function cabin() {
    //top of the cabin
    drawTriangle(400, 400, "black");

    //cabin outline
   drawSqure(400,400,200,199,2,"black","chocolate")
   //door
   drawSqure(475,500,60,99,2,"black","cornsilk")
   //left window
   drawSqure(425,425,50,50,2,"black","cornsilk")
    //right window
   drawSqure(525,425,50,50,2,"black","cornsilk")
}

function night() {
    backgroundNight();
    drawMoon();
    mountains();
    context.font = "30px Arial";
    context.fillStyle = "skyblue"
    context.fillText("Good Night", 705, 50);
}

function backgroundNight() {
    context.beginPath();
    context.rect(700, 0, 700, 600);
    context.fillStyle = "darkblue";
    context.fill();
}

function drawMoon() {

    context.lineWidth = 2;

    context.beginPath();
    context.arc(1300, 100, 85, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();

    context.beginPath();
    context.arc(1250, 110, 85, 0, Math.PI * 2, true);
    context.fillStyle = "darkblue";
    context.fill();

}

function mountains() {

    //biggest mountain
    context.beginPath()
    context.moveTo(700, 600)
    context.lineTo(950, 200)
    context.lineTo(1200, 600)
    context.fillStyle = "dimgrey"
    context.fill();
    context.closePath()

    // "snow" on the biggest mountain
    context.beginPath()
    context.moveTo(888, 300)
    context.lineTo(950, 200)
    context.lineTo(1012, 300)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()

    //Middle mountain
    context.beginPath()
    context.moveTo(900, 600)
    context.lineTo(1100, 300)
    context.lineTo(1300, 600)
    context.fillStyle = "grey"
    context.fill();
    context.closePath()

    // "snow" on middle mountain
    context.beginPath()
    context.moveTo(1034, 400)
    context.lineTo(1100, 300)
    context.lineTo(1166, 400)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()

    // smallest mountain
    context.beginPath()
    context.moveTo(800, 600)
    context.lineTo(925, 400)
    context.lineTo(1075, 600)
    context.fillStyle = "darkgray"
    context.fill();
    context.closePath()

    // "snow" on smallest mountain
    context.beginPath()
    context.moveTo(875, 480)
    context.lineTo(925, 400)
    context.lineTo(985, 480)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()
    
}

function ground () { 
    //morning ground
    context.beginPath();
    context.rect(0, 600, 700, 25);
    context.fillStyle = "saddlebrown";
    context.fill();
    context.closePath();

    //night ground
    context.beginPath();
    context.rect(700, 600, 1400, 25);
    context.fillStyle = "forestgreen";
    context.fill();
    context.closePath();
}

morning();
night();
ground();

