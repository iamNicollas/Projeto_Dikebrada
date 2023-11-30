document.addEventListener("DOMContentLoaded", function() {
    const produtosContainer = document.getElementById("produtos");
    const categoriaSelect = document.getElementById("categoria");

    const produtos = [
        { nome: "Calça Jeans", categoria: "calcas", imagem: "calca-jeans.jpg", preco: 49.99 },
    ];

    // Função para exibir os produtos com base na categoria selecionada
    function exibirProdutos(categoria) {
        const produtosFiltrados = categoria === "todos"
            ? produtos
            : produtos.filter(produto => produto.categoria === categoria);

        produtosContainer.innerHTML = "";

        produtosFiltrados.forEach(produto => {
            const produtoElement = document.createElement("div");
            produtoElement.classList.add("produto");

            produtoElement.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">$${produto.preco.toFixed(2)}</p>
            `;

            produtosContainer.appendChild(produtoElement);
        });
    }

    // Evento de mudança na seleção de categoria
    categoriaSelect.addEventListener("change", function() {
        const categoriaSelecionada = categoriaSelect.value;
        exibirProdutos(categoriaSelecionada);
    });

    // Exibir todos os produtos ao carregar a página
    exibirProdutos("todos");
});