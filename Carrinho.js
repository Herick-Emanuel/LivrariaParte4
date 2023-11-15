function exibirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const cart = document.getElementById('carrinho');
  if (!cart) return;

  if (carrinho.length === 0) {
    cart.innerHTML = '<p>Carrinho vazio.</p>';
    return;
  }

  cart.innerHTML = '';

  carrinho.forEach((item) => {
    const livro = item;
    cart.innerHTML += `
      <div class="item-carrinho" data-id="${livro.id}">
        <h2>${livro.titulo}</h2>
        <img src="${livro.imagem}" alt="${livro.titulo}">
        <p>Gênero: ${livro.genero}</p>
        <p>Preço: R$ ${livro.preco.toFixed(2)}</p>
        <p>Quantidade: ${livro.quantidade}</p>
        <button class="button" onclick="removerDoCarrinho(this)">Remover</button>
      </div>
    `;
  });
}

function removerDoCarrinho(button) {
  const livroId = parseInt(button.parentElement.dataset.id);
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const updatedCarrinho = carrinho.filter((item) => item.id !== livroId);
  localStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
  exibirCarrinho();
}

document.addEventListener('DOMContentLoaded', () => {
  exibirCarrinho();
});