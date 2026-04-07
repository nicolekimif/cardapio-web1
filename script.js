//Simulação para adicionar itens ao pedido
//Seleciona todos os botôes que possuem a classe "Categoria"
const botoesAdicionar = document.querySelectorAll('.adicionar');

//Selecionar a lista one os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

//Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');

//Cria a variável que armazena o valor total dos pedidos 
let total = 0;

//Percorre todos os botões com class "Adicionar" e adiciona um evento de clique em cada um deles
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () =>{
        //Obtém o elemento pai do botão (card do produto)
        const produto = botao.parentElement;

        //Obtém o nome do produto a partir do texto dentro da tag <h3>
        const nome = produto.querySelector("h3").textContent;

        //Obtém o preço do produto, removendo o texto 'R$'
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", ""));


        //Cria um item de lista <li> para adicionar o produto ao pedido 
        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        //Adiciona o item criado à lista de pedido
        listaPedido.appendChild(itemPedido);

        //Atualiza o total da compra somando o preço do novo item 
        total += preco;

        //Atualiza o texto do elemento que exibe o total do pedido
        totalElemento.textContent = `total: R$ ${total.toFixed(2)}`;
    });
});

const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () =>{
    alert("Pedido finalizado " + totalElemento.textContent);
    listaPedido.innerHTML = "";
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
})
