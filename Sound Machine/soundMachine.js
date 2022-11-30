var currentPlayer;
function EvalSound(soundobj) {

 var thissound=document.getElementById(soundobj);
 if(currentPlayer  && currentPlayer != thissound) {
      currentPlayer.pause(); 
 }
 if (thissound.paused)
            thissound.play();
    else
        thissound.pause();
        thissound.currentTime = 0;
         currentPlayer = thissound;
}

