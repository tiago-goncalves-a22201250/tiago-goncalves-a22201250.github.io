document.addEventListener('DOMContentLoaded', function() {
  carregarProdutos();
  carregarCarrinho();
  carregarSelect();
});

function carregarProdutos() {
  let productsContainer = document.getElementById('produtosContainer');

  fetch('https://deisishop.pythonanywhere.com/products/')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(produto => {
        const article = criarProduto(produto);
        productsContainer.appendChild(article);
      });
    })
    .catch(error => console.error('Erro:', error));
}


function criarProduto(produto) {
  const article = document.createElement('article');
  article.classList.add('produto');

  const titleElement = document.createElement('h3');
  titleElement.textContent = produto.title;

  const imageElement = document.createElement('img');
  imageElement.src = produto.image;
  imageElement.alt = produto.title;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Custo total: ${produto.price.toFixed(2)} €`;
  priceElement.classList.add('preco');

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = produto.description;

  const addButton = document.createElement('button');
  addButton.textContent = 'Adicionar ao Cesto';
  addButton.addEventListener('click', function() {
      adicionarAoCarrinho(produto);
  });

  article.appendChild(titleElement);
  article.appendChild(imageElement);
  article.appendChild(priceElement);
  article.appendChild(descriptionElement);
  article.appendChild(addButton);

  return article;
}

function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

function carregarCarrinho() {
  const valor = document.getElementById('resultado');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const carrinhoContainer = document.getElementById('carrinhoContainer');
  carrinhoContainer.innerHTML = '';

  carrinho.forEach((produto, index) => {

      const article = document.createElement('article');
      article.classList.add('produto');

      const titleElement = document.createElement('h3');
      titleElement.textContent = produto.title;

      const imageElement = document.createElement('img');
      imageElement.src = produto.image;
      imageElement.alt = produto.title;

      const priceElement = document.createElement('p');
      priceElement.textContent = `Custo total: ${produto.price.toFixed(2)} €`;
      priceElement.classList.add('preco');

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.addEventListener('click', function() {
          removerDoCarrinho(index);
      });

      article.appendChild(titleElement);
      article.appendChild(imageElement);
      article.appendChild(priceElement);
      article.appendChild(removeButton);
      carrinhoContainer.appendChild(article);
      valor.appendChild(valor);
  });
}


function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho();
}

function carregarSelect() {
  let filtro = document.getElementById('filtro-select');
}