Rgb();

function Rgb() {
  const RGB1 = document.getElementById("title1");
  const RGB2 = document.getElementById("title2");
  const RGB3 = document.getElementById("title3");
  const RGB4 = document.getElementById("title4");
  const RGB5 = document.getElementById("title5");
  const RGB6 = document.getElementById("title6");
  const RGB7 = document.getElementById("title7");
  const RGB8 = document.getElementById("title8");
  const RGB9 = document.getElementById("title9");
  const RGB10 = document.getElementById("title10");

  setTimeout(vermelho, 1000);
  setTimeout(laranja, 2000);
  setTimeout(amarelo, 3000);
  setTimeout(verde, 4000);
  setTimeout(azulClaro, 5000);
  setTimeout(azul, 6000);
  setTimeout(roxo, 7000);
  
  function vermelho() {
    RGB1.style.color = "red";
    RGB2.style.color = "red";
    RGB3.style.color = "red";
    RGB4.style.color = "red";
    RGB5.style.color = "red";
    RGB6.style.color = "red";
    RGB7.style.color = "red";
    RGB8.style.color = "red";
    RGB9.style.color = "red";
    RGB10.style.color = "red";
  }
  function laranja() {
    RGB1.style.color = "orange";
    RGB2.style.color = "orange";
    RGB3.style.color = "orange";
    RGB4.style.color = "orange";
    RGB5.style.color = "orange";
    RGB6.style.color = "orange";
    RGB7.style.color = "orange";
    RGB8.style.color = "orange";
    RGB9.style.color = "orange";
    RGB10.style.color = "orange";
  }
  function amarelo() {
    RGB1.style.color = "yellow";
    RGB2.style.color = "yellow";
    RGB3.style.color = "yellow";
    RGB4.style.color = "yellow";
    RGB5.style.color = "yellow";
    RGB6.style.color = "yellow";
    RGB7.style.color = "yellow";
    RGB8.style.color = "yellow";
    RGB9.style.color = "yellow";
    RGB10.style.color = "yellow";
  }
  function verde() {
    RGB1.style.color = "green";
    RGB2.style.color = "green";
    RGB3.style.color = "green";
    RGB4.style.color = "green";
    RGB5.style.color = "green";
    RGB6.style.color = "green";
    RGB7.style.color = "green";
    RGB8.style.color = "green";
    RGB9.style.color = "green";
    RGB10.style.color = "green";
  }
  function azulClaro() {
    RGB1.style.color = "lightblue";
    RGB2.style.color = "lightblue";
    RGB3.style.color = "lightblue";
    RGB4.style.color = "lightblue";
    RGB5.style.color = "lightblue";
    RGB6.style.color = "lightblue";
    RGB7.style.color = "lightblue";
    RGB8.style.color = "lightblue";
    RGB9.style.color = "lightblue";
    RGB10.style.color = "lightblue";
  }
  function azul() {
    RGB1.style.color = "blue";
    RGB2.style.color = "blue";
    RGB3.style.color = "blue";
    RGB4.style.color = "blue";
    RGB5.style.color = "blue";
    RGB6.style.color = "blue";
    RGB7.style.color = "blue";
    RGB8.style.color = "blue";
    RGB9.style.color = "blue";
    RGB10.style.color = "blue";
  }
  function roxo() {
    RGB1.style.color = "purple";
    RGB2.style.color = "purple";
    RGB3.style.color = "purple";
    RGB4.style.color = "purple";
    RGB5.style.color = "purple";
    RGB6.style.color = "purple";
    RGB7.style.color = "purple";
    RGB8.style.color = "purple";
    RGB9.style.color = "purple";
    RGB10.style.color = "purple";
    Rgb();
  }
}
