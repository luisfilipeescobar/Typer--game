$("#trocar-frase").click(fraseAleatoria);
$("#trocar-frase-id").click(buscaFrase);


function fraseAleatoria() {
  $("#spinner").fadeToggle(600);
  $.get("http://localhost:3000/frases",trocaFraseAleatoria)
  .fail(function(){
    $("#erro").fadeToggle(700);
    setTimeout(function () {
        $("#erro").fadeToggle(700);
      }, 2500);
    })
    .always(function () {
      $("#spinner").fadeToggle(500);

    });
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {
  $("#spinner").fadeToggle(600);
  var fraseId = $("#frase-id").val();

  var dados  = {id: fraseId}

  $.get("http://localhost:3000/frases",dados,trocaFrase)
  .fail(function(){
    $("#erro").fadeToggle(700);
      setTimeout(function () {
          $("#erro").fadeToggle(700);
        }, 2500);
    })
    .always(function () {
      $("#spinner").fadeToggle(500);

    });
}

function trocaFrase(data) {
  var frase = $(".frase");
  frase.text(data.texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data.tempo);
}
