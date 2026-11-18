/* =====================================
   HORRIBLE WEB 2000
   LOJA VIRTUAL
   ===================================== */

// =====================================
// LOCALIZAÇÃO DOS ELEMENTOS HTML
// =====================================
const botoesComprar = document.querySelectorAll(".btnComprar");
const quantidadeCarrinho = document.getElementById("quantidadeCarrinho");
const mensagemCarrinho = document.getElementById("mensagemCarrinho");
const mensagemLoja = document.getElementById("mensagemLoja");
const btnFinalizar = document.getElementById("btnFinalizar");

// =====================================
// CONTROLE DO CARRINHO
// =====================================
let quantidadeProdutos = 0;

// =====================================
// MENSAGENS ABSURDAS DA LOJA
// =====================================
const mensagensCompra = [
    "EXCELENTE ESCOLHA! OU NÃO!",
    "NOSSO ESTOQUE IMAGINÁRIO ESTÁ DIMINUINDO!",
    "PARABÉNS! VOCÊ ACABA DE COMPRAR ABSOLUTAMENTE NADA!",
    "O GERENTE ESTÁ CHORANDO DE ALEGRIA!",
    "COMPRA AUTORIZADA PELO CONSELHO DAS BATATAS!",
    "ERRO 404: BOM SENSO NÃO ENCONTRADO!",
];

// =====================================
// INICIALIZAÇÃO DA LOJA
// =====================================
if (quantidadeCarrinho && mensagemCarrinho && mensagemLoja) {
    // =====================================
    // ADICIONAR PRODUTOS AO CARRINHO
    // =====================================
    botoesComprar.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const produto = botao.dataset.produto;
            quantidadeProdutos++;
            quantidadeCarrinho.textContent = quantidadeProdutos;
            mensagemCarrinho.textContent =
                quantidadeProdutos + " produto(s) imaginários no carrinho!";
            mensagemLoja.textContent =
                produto + " foi adicionado ao carrinho. Talvez.";

            // SORTEIA UMA MENSAGEM ABSURDA
            const indice = Math.floor(Math.random() * mensagensCompra.length);
            alert(mensagensCompra[indice]);
        });
    });

    // =====================================
    // FINALIZAÇÃO DA COMPRA
    // =====================================
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", function () {
            // VERIFICA SE O CARRINHO ESTÁ VAZIO

            if (quantidadeProdutos === 0) {
                mensagemLoja.textContent =
                    "SEU CARRINHO ESTÁ VAZIO! COMPRE ALGUMA COISA INÚTIL!";
                alert("ERRO 404: PRODUTOS NÃO ENCONTRADOS!");
                return;
            }

            // FINALIZA A COMPRA IMAGINÁRIA
            mensagemLoja.textContent =
                "COMPRA FINALIZADA! VOCÊ NÃO PAGOU NADA E NÃO RECEBERÁ NADA!";
            alert("PARABÉNS! SUA COMPRA IMAGINÁRIA FOI CONCLUÍDA COM SUCESSO");

            // ZERA O CARRINHO FICTÍCIO
            quantidadeProdutos = 0;
            quantidadeCarrinho.textContent = quantidadeProdutos;
            mensagemCarrinho.textContent =
                "Seu carrinho está vazio novamente. Obrigado por nada!";
        });
    }
}

// =====================================
// MENSAGEM NO CONSOLE
// =====================================
console.log("LOJA HORRIBLE WEB 2000 INICIADA!");
