class Livro {
  static nextId = 1;

  constructor(titulo, imagem, genero, preco, descricao) {
    this.id = Livro.nextId++;
    this.titulo = titulo;
    this.imagem = imagem;
    this.genero = genero;
    this.preco = preco;
    this.descricao = descricao;
  }

  getHTML() {
    return `
      <div class="livro">
        <h2>${this.titulo}</h2>
        <img src="${this.imagem}" alt="${this.titulo}">
        <hr>
        <p>Gênero: ${this.genero}</p>
        <p>Preço: R$ ${this.preco.toFixed(2)}</p>
        <hr>
        <button class="button" onclick="adicionarAoCarrinho(${this.id})">Adicionar ao Carrinho</button>
        <a href="#" onclick="redirecionarParaDescricao(${this.id})">Ver detalhes</a>
      </div>
    `;
  }
}

  const livros = [
    new Livro('Senhor dos anéis', 'Windons2/Imagens/Livro1.png', 'Ficção', 29.99, 'Um épico de fantasia que narra a jornada do jovem hobbit Frodo Bolseiro para destruir o Um Anel e impedir que o maligno Senhor do Escuro, Sauron, domine a Terra-média.'),
    new Livro('Harry Potter', 'Windons2/Imagens/Livro2.png', 'Fantasia', 19.99, 'A série conta a história de Harry Potter, um jovem bruxo que descobre no seu aniversário de onze anos que é um bruxo. Ele recebe uma carta convidando-o a frequentar a Escola de Magia e Bruxaria de Hogwarts.'),
    new Livro('Penumbra', 'Windons2/Imagens/Livro3.png', 'Romance', 24.99),
    new Livro('O Poder do Hábito','Windons2/Imagens/Livro4.png','Ficção',22.90),
    new Livro('O Homem de Giz','Windons2/Imagens/Livro5.png','Ficção',35.50),
    new Livro('É assim que acaba','Windons2/Imagens/Livro6.png','Ficção',39,99),
    new Livro('O Hobbit','Windons2/Imagens/Livro7.png','Ação',19.00),
    new Livro('Luzes do Norte','Windons2/Imagens/Livro8.png','Aventura',32,70),
    new Livro('1984','Windons2/Imagens/Livro9.png','Ficção',27,50),
    new Livro('O livro da matemática','Windons2/Imagens/Livro10.png','Ficção',30.00)
  ];

 if (!localStorage.getItem('carrinho')) {
  localStorage.setItem('carrinho', JSON.stringify([]));
}

function exibirLivrosPorGenero(generoSelecionado) {
  const bookList = document.getElementById('bookList');
  if (!bookList) return;

  bookList.innerHTML = '';
  livros.forEach((livro) => {
    if (livro.genero === generoSelecionado || generoSelecionado === 'Todos') {
      const livroHTML = livro.getHTML();
      bookList.innerHTML += livroHTML;
    }
  });
}

function exibirTodosLivros() {
  exibirLivrosPorGenero('Todos');
}

function filtrarPorGenero() {
  const selectGenero = document.getElementById('selectGenero');
  const generoSelecionado = selectGenero.value;
  exibirLivrosPorGenero(generoSelecionado);
}

document.addEventListener('DOMContentLoaded', () => {
  const selectGenero = document.getElementById('selectGenero');
  selectGenero.addEventListener('change', filtrarPorGenero);

  exibirTodosLivros();
});

function adicionarAoCarrinho(id) {
  const livro = livros.find((livro) => livro.id === id);
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const livroNoCarrinho = carrinho.find((item) => item.id === id);

  if (livroNoCarrinho) {
    livroNoCarrinho.quantidade++;
  } else {
    carrinho.push({ ...livro, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  exibirCarrinho();
}
  
  function mostrarCarrinho() {
    window.location.href = 'Carrinho.html';
  }
  
  function redirecionarParaDescricao(id) {
    window.location.href = `Descricao.html?id=${id}`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    exibirTodosLivros();
  });