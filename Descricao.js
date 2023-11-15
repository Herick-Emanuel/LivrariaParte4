 const params = new URLSearchParams(window.location.search);
 const livroId = parseInt(params.get('id'));

 const livroSelecionado = livros.find((livro) => livro.id === livroId);

 const descricaoLivro = document.getElementById('descricaoLivro');
 descricaoLivro.innerHTML = `
   <div class="livro">
     <h2>${livroSelecionado.titulo}</h2>
     <img src="${livroSelecionado.imagem}" alt="${livroSelecionado.titulo}">
     <p>Gênero: ${livroSelecionado.genero}</p>
     <p>Preço: R$ ${livroSelecionado.preco.toFixed(2)}</p>
     <p>${livroSelecionado.descricao}</p> <!-- Exibindo a descrição do livro -->
   </div>
 `;