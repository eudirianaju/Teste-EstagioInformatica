
function toggleButton(buttonId) {
  var button = document.getElementById(buttonId);
  button.classList.toggle('expand');
}

function expandButton(buttonId) {
  var button = document.getElementById(buttonId);
  button.classList.toggle('expanded');
}

$(document).ready(function() {
    // Atribui eventos de mouseenter e mouseleave ao carrossel
    $('#carouselExample').mouseenter(function() {
      // Inicia o carrossel quando o cursor entra no carrossel
      $('#carouselExample').carousel('cycle');
    }).mouseleave(function() {
      // Pausa o carrossel quando o cursor sai do carrossel
      $('#carouselExample').carousel('pause');
    });
  });
  $(document).ready(function() {
    $('.custom-carousel').hover(
      function() {
        $(this).carousel('next');
      },
      function() {
        // Não faz nada quando o cursor sai do carrossel
      }
    );
  });

  