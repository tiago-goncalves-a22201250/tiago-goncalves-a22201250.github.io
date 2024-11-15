document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos(produtos);
  });
  
  function carregarProdutos(produtos) {
    const productsContainer = document.getElementById('produtosContainer');
    productsContainer.innerHTML = '';
  
    produtos.forEach(produto => {
      console.log(produto);           
      console.log(produto.id);    
      console.log(produto.title); 
  
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
    priceElement.textContent = `Custo total: ${produto.price.toFixed(2)} €`;
    priceElement.classList.add('preco');

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = produto.description;

    article.appendChild(titleElement);
    article.appendChild(imageElement);
    article.appendChild(priceElement);
    article.appendChild(descriptionElement);
  
    return article;
  }
  