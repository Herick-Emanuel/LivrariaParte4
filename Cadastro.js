document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var confirmarSenha = document.getElementById('confirmar-senha').value.trim();
  
    if (!nome || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
  
    if (senha.length < 8 || !/[a-z]/.test(senha) || !/[A-Z]/.test(senha) || !/\d/.test(senha) || !/[^A-Za-z\d]/.test(senha)) {
      alert('A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
      return;
    }
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, digite a mesma senha nos dois campos.');
      return;
    }

    var nomeRegex = /^[A-Za-z\s]+$/;
    if (!nomeRegex.test(nome)) {
      alert('Por favor, insira um nome válido (apenas letras e espaços são permitidos).');
      return;
    }
  
    var usuario = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!');
    this.reset();
  });