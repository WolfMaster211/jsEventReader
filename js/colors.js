const figure = document.getElementById("figure");
const color = 'red';

function paintMe() {
    //figure.style.background = color;
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    figure.style.backgroundColor = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();