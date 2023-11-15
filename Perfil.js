document.addEventListener('DOMContentLoaded', function () {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
  
    if (usuario) {
      document.getElementById('nome').textContent = usuario.nome;
      document.getElementById('email').textContent = usuario.email;
    } else {
      window.location.href = 'login.html';
    }

    exibirUltimoLivro();
  });
  
  var textareaBiografia = document.getElementById('biografia');
  var botaoSalvarBiografia = document.getElementById('salvar-biografia');
  var biografiaContainer = document.getElementById('biografia-container');

  var biografiaSalva = localStorage.getItem('biografia');
  
  if (biografiaSalva) {
    biografiaContainer.textContent = biografiaSalva;
  }
  
  botaoSalvarBiografia.addEventListener('click', function () {
    var biografia = textareaBiografia.value;
  
    localStorage.setItem('biografia', biografia);
  
    biografiaContainer.textContent = biografia;
  
    textareaBiografia.value = '';
  });