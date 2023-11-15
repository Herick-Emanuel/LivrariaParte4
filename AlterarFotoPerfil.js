function atualizarFotoPerfil() {
    var inputFotoPerfil = document.getElementById('input-foto-perfil');
    var fotoPerfil = document.getElementById('foto-perfil');
  
    inputFotoPerfil.addEventListener('change', function(event) {
      var file = event.target.files[0];
      if (file) {
        var reader = new FileReader();
  
        reader.addEventListener('load', function() {
          fotoPerfil.src = reader.result;
          localStorage.setItem('imagemPerfil', reader.result);
        });
  
        reader.readAsDataURL(file);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var imagemPerfil = localStorage.getItem('imagemPerfil');
    if (imagemPerfil) {
      var fotoPerfil = document.getElementById('foto-perfil');
      fotoPerfil.src = imagemPerfil;
    }
  
    atualizarFotoPerfil();
  });