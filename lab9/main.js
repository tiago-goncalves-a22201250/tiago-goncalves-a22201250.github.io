const produtosCon = document.getElementById("produtosContainer");

produtos.forEach((produto) => {
    const produtoCard = document.createElement("div");
    produtoCard.classList.add("produtoCard");

    produtoCard.innerHTML = `
        <h3>${produto.title}</h3>
        <img src="${produto.image}" alt="${produto.title}" class="produtoImagem">
        <p class="produtoPreco">Custo total: ${produto.price} €</p>
        <p class="produtoDescricao">${produto.description}</p>
        <button class="produtoBotao">+ Adicionar ao Cesto</button>
    `;

    produtosCon.appendChild(produtoCard);
});
