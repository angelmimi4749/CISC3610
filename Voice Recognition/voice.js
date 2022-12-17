const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
var color;
var size;

//draws the circle
function drawArc(color ="black",size = 25) {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, size, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.strokeStyle = color;
  context.stroke();
}
drawArc(); //function call

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = false;


//function that changes speak to stop and vice versa and calls the function that changes the shape and color
function change() {
  var elem = document.getElementById("start-btn");
  if (elem.value=="Speak") {
    elem.value = "Stop";
    //"recording" in progress --> the mic is on
    canvasChange();
    recognition.onspeechend = () => {
      elem.value = "Speak"
    }
  }
}

function canvasChange() {
  recognition.start();
  recognition.onresult = function(event){ 
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    if (command.split(" ")[0] == "Color") {
      color = command.split(" ")[1];
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawArc(color);
      
    }
    if (command.split(" ")[0] == "size") {
      size = parseInt(command.split(" ")[1]);
      if (size > 300) speak('Size limit 300')
      if (size < 1) {
        speak("Size too small");
        speak("the minimal size");
        speak("is 1");
      }
      if (size >=1 && size <=300) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawArc(color,size);
      }
    }
    if (command == "help") {
      speak("Say color, followed by a color");
      speak("to set the circle color.");
      speak("Say size, followed of a number");
      speak("from 1 to 300, to set the diameter of the circle.")
    }
  }
}

function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  speechSynthesis.speak(msg);
}
