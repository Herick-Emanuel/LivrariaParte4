document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  

    var usuario = JSON.parse(localStorage.getItem('usuario'));
  

    if (usuario && email === usuario.email && senha === usuario.senha) {
      alert('Login bem-sucedido!');

      window.location.href = 'PaginaInicial.html';
    } else {
      alert('E-mail ou senha inválidos!');
    }
  });