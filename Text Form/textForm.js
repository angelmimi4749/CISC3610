function draw() {
  setInterval(()=> {
    let id = document.getElementById("id");
    id.innerText = document.getElementById("fname").value;
    document.body.style.backgroundColor = document.getElementById("backgroundColor").value;
    id.style.color = document.getElementById("textColor").value;
    id.style.fontSize = document.getElementById("slider").value+"px";
},200);
  var radios = document.forms["form"].elements["font"];
  for(var i = 0, max = radios.length; i < max; i++) {
      radios[i].onclick = function() {
          id.style.fontFamily = this.value;
      }
  }
}

