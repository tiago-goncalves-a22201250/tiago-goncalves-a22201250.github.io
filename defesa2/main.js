document.addEventListener('DOMContentLoaded', function () {
  carregarProdutos();
  carregarCarrinho();
});

let todosOsProdutos = [];

function carregarProdutos() {
  let productsContainer = document.getElementById('produtosContainer');

  fetch('https://deisishop.pythonanywhere.com/products/')
    .then((response) => response.json())
    .then((data) => {
      todosOsProdutos = data;
      carregarCategorias(data);
      carregarOrdenacao();
      exibirProdutos(data);
    })
    .catch((error) => console.error('Erro:', error));
}

function exibirProdutos(produtos) {
  let productsContainer = document.getElementById('produtosContainer');
  productsContainer.innerHTML = '';



  produtos.forEach((produto) => {
    const article = criarProduto(produto);
    productsContainer.appendChild(article);
  });
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
  priceElement.textContent = `Preço: ${produto.price.toFixed(2)} €`;
  priceElement.classList.add('preco');

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = produto.description;

  const addButton = document.createElement('button');
  addButton.textContent = 'Adicionar ao Cesto';
  addButton.addEventListener('click', function () {
    adicionarAoCarrinho(produto);
  });

  article.appendChild(titleElement);
  article.appendChild(imageElement);
  article.appendChild(priceElement);
  article.appendChild(descriptionElement);
  article.appendChild(addButton);

  return article;
}

function criarProdutoSemDescricao(produto) {

  const article = document.createElement('article');
  article.classList.add('produto');

  const titleElement = document.createElement('h3');
  titleElement.textContent = produto.title;

  const imageElement = document.createElement('img');
  imageElement.src = produto.image;
  imageElement.alt = produto.title;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Preço: ${produto.price.toFixed(2)} €`;
  priceElement.classList.add('preco');

  const addButton = document.createElement('button');
  addButton.textContent = 'Adicionar ao Cesto';
  addButton.addEventListener('click', function () {
    adicionarAoCarrinho(produto);
  });

  article.appendChild(titleElement);
  article.appendChild(imageElement);
  article.appendChild(priceElement);
  article.appendChild(addButton);

  return article;
}

function carregarCategorias(produtos) {
  const categorias = [...new Set(produtos.map((produto) => produto.category))];
  const selectElement = document.getElementById('filtro-select');

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'Todas as Categorias';
  selectElement.appendChild(allOption);

  categorias.forEach((categoria) => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    selectElement.appendChild(option);
  });

  selectElement.addEventListener('change', function () {
    aplicarFiltros();
  });
}

function carregarOrdenacao() {
  const sortSelect = document.getElementById('ordenar-select');

  const defaultOption = document.createElement('option');
  defaultOption.value = 'default';
  defaultOption.textContent = 'Ordenar pelo preço';
  sortSelect.appendChild(defaultOption);

  const descendingOption = document.createElement('option');
  descendingOption.value = 'des';
  descendingOption.textContent = 'Preço descendente';
  sortSelect.appendChild(descendingOption);

  const ascendingOption = document.createElement('option');
  ascendingOption.value = 'asc';
  ascendingOption.textContent = 'Preço ascedente';
  sortSelect.appendChild(ascendingOption);

  sortSelect.addEventListener('change', function () {
    aplicarFiltros();
  });
}

function aplicarFiltros() {
  const categorySelect = document.getElementById('filtro-select');
  const sortSelect = document.getElementById('ordenar-select');
  const searchInput = document.getElementById('search-input');
  const botaoSelect = document.getElementById('botao-select');
  const botao = document.getElementById('botaoAll');

  let produtosFiltrados = [...todosOsProdutos];
  const categoriaSelecionada = categorySelect.value;
  if (categoriaSelecionada !== 'all') {
    produtosFiltrados = produtosFiltrados.filter(
      (produto) => produto.category === categoriaSelecionada
    );
  }

  const ordenacaoSelecionada = sortSelect.value;
  if (ordenacaoSelecionada === 'asc') {
    produtosFiltrados.sort((a, b) => a.rating.rate < b.rating.rate);
  } else if (ordenacaoSelecionada === 'desc') {
    produtosFiltrados.sort((a, b) => a.rating.rate > b.rating.rate);
  }

  const textoBusca = searchInput.value.toLowerCase();
  produtosFiltrados = produtosFiltrados.filter((produto) =>
    produto.title.toLowerCase().includes(textoBusca) || produto.description.toLowerCase().includes(textoBusca)
  );

  botao.addEventListener('click', function () {
    adicionarAoCarrinhoAll(produtos);
  });

  botaoSelect.addEventListener('click', function () {
    criarProdutoSemDescricao(produtos);
  });

  exibirProdutos(produtosFiltrados);
}

function carregarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const carrinhoContainer = document.getElementById('carrinhoContainer');
  const valor = JSON.parse(localStorage.getItem('valor')) || 0;
  const conta = document.getElementById('resultado');
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
    priceElement.textContent = `Preço: ${produto.price.toFixed(2)} €`;
    priceElement.classList.add('preco');

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', function () {
      removerDoCarrinho(index, produto.price);
    });

    article.appendChild(titleElement);
    article.appendChild(imageElement);
    article.appendChild(priceElement);
    article.appendChild(removeButton);
    carrinhoContainer.appendChild(article);
  });
  conta.textContent = `Custo total: ${valor.toFixed(2)} €`;
}

function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let valor = JSON.parse(localStorage.getItem('valor')) || 0;
  carrinho.push(produto);
  valor += produto.price;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  localStorage.setItem('valor', JSON.stringify(valor));
  carregarCarrinho();
}

//Adiciona todos os produtos ao carrinho
function adicionarAoCarrinhoAll(produtos) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let valor = JSON.parse(localStorage.getItem('valor')) || 0;
  produtos.forEach((produto) => {
    carrinho.push(produto);
    valor += produto.price;
  });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  localStorage.setItem('valor', JSON.stringify(valor));
  carregarCarrinho();
}

function removerDoCarrinho(index, price) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let valor = JSON.parse(localStorage.getItem('valor')) || 0;
  carrinho.splice(index, 1);
  valor -= price;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  localStorage.setItem('valor', JSON.stringify(valor));
  carregarCarrinho();
}

//Desconto botão

const botao = document.getElementById('botao');

botao.addEventListener('click', desconto);

function desconto() {
  const valor = JSON.parse(localStorage.getItem('valor')) || 0;
  const descontoCheck = document.getElementById('checkbox');
  const textoValor = document.getElementById('textoValorFinal');
  const referenciaBancaria = document.getElementById('referenciaBancaria');
  let desconto = 0;

  if (descontoCheck.checked) {
    desconto = valor * 0.9;
  } else {
    desconto = valor;
  }

  textoValor.textContent = `Valor final a pagar (com eventuais descontos): ${desconto.toFixed(2)} euros`;
  referenciaBancaria.textContent = `Referencia de pagamento: 201124-0049`;
}

document.getElementById('search-input').addEventListener('input', function () {
  aplicarFiltros();
});