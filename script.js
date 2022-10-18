function getRandomColour(){
  var newColor = Math.floor(Math.random()*16777215).toString(16);
  return newColor;
}

function changeColor1(){
  var elem1 = document.getElementById("paragraph1");
  elem1.style.color = "#" + getRandomColour();
  elem1.style.background = "#" + getRandomColour();
}
function changeColor2(){
  var elem2 = document.querySelector('#paragraph2');
  elem2.style.color = "#" + getRandomColour();
  elem2.style.background = "#" + getRandomColour();
}
 
function add() {
  document.getElementById("tbilisi_photo").innerHTML = "<img src = \"./img/tbilisi.jpg\" alt=\"Photo of Tbilisi\"" +
      "height =\"500\" width=\"800\">";
  document.getElementById("add").value = "Add";
}

function max() {
  document.getElementById('tbilisi_photo').innerHTML = "<img src = \"./img/tbilisi.jpg\"" +
      "alt=\"Photo of Tbilisi\" height = \"700\" width = \"1000\">";
  document.getElementById("increase").value = "Increase";
}

function min(){
  document.getElementById('tbilisi_photo').innerHTML = "<img src = \"./img/tbilisi.jpg\"" +
      "alt=\"Photo of Tbilisi\" height = \"300\" width = \'600\'>";
  document.getElementById("reduce").value = "Reduce";
}

function del() {
  document.getElementById("tbilisi_photo").innerHTML = "<img src=\"\">";
  document.getElementById("delete").value = "Delete";
}
