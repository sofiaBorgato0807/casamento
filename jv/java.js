
$(document).ready(function() {
    $('.galeria-item').on('click', function() {
      const src = $(this).attr('src');
      $('.modal-imagem').attr('src', src);
      $('#imagemModal').modal('show');
    });
  });
  