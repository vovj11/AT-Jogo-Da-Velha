let player = document.getElementById("sJogadorDaVez");
let player1 = "X";
let player2 = "O";
let turnPlayer = player1;

function mostrarJogador() {
  player.innerHTML = turnPlayer;
}

function marcarCasa(event, numCasa) {
  if (numCasa != undefined) {
    alert(`A casa clicada foi: ${numCasa}`);
  }
  var espacos = document.getElementsByClassName("casa");
  for (var i = 0; i < espacos.length; i++) {
    espacos[i].addEventListener("click", function () {
      if (this.getElementsByTagName("span").length == 0) {
        if (turnPlayer == player1) {
          this.innerHTML = "<span>X</span>";
          this.setAttribute("jogador", player1);
          turnPlayer = player2;
        } else {
          this.innerHTML = "<span>O</span>";
          this.setAttribute("jogador", player2);
          turnPlayer = player1;
        }
        mostrarJogador();
        verificarVencedor();
      }
    });
  }
}

function verificarVencedor() {
  var casa1 = document.getElementById("casa1").getAttribute("jogador");
  var casa2 = document.getElementById("casa2").getAttribute("jogador");
  var casa3 = document.getElementById("casa3").getAttribute("jogador");

  var casa4 = document.getElementById("casa4").getAttribute("jogador");
  var casa5 = document.getElementById("casa5").getAttribute("jogador");
  var casa6 = document.getElementById("casa6").getAttribute("jogador");

  var casa7 = document.getElementById("casa7").getAttribute("jogador");
  var casa8 = document.getElementById("casa8").getAttribute("jogador");
  var casa9 = document.getElementById("casa9").getAttribute("jogador");

  var vencedor = "";

  if (
    ((casa1 == casa4 && casa1 == casa7) ||
      (casa1 == casa2 && casa1 == casa3) ||
      (casa1 == casa5 && casa1 == casa9)) &&
    casa1 != ""
  ) {
    vencedor = casa1;
  } else if (
    ((casa5 == casa4 && casa5 == casa6) ||
      (casa5 == casa2 && casa5 == casa8) ||
      (casa5 == casa3 && casa5 == casa7)) &&
    casa5 != ""
  ) {
    vencedor = casa5;
  } else if (
    ((casa9 == casa8 && casa9 == casa7) ||
      (casa9 == casa3 && casa9 == casa6)) &&
    casa9 != ""
  ) {
    vencedor = casa9;
  } else if (
    casa1 != "" &&
    casa2 != "" &&
    casa3 != "" &&
    casa4 != "" &&
    casa5 != "" &&
    casa6 != "" &&
    casa7 != "" &&
    casa8 != "" &&
    casa9 != ""
  ) {
    vencedor = "empate";
  }

  if (vencedor != "" && vencedor != "empate") {
    alert(`O ganhador foi: ${vencedor}`);
    location.reload();
  } else if (vencedor == "empate") {
    alert("O jogo foi empatado!");
    location.reload();
  }
}

marcarCasa();
