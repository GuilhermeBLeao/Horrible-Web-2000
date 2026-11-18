/* =====================================
   HORRIBLE WEB 2000
   FORMULÁRIO DE CADASTRO
   ===================================== */

// LOCALIZAÇÃO DOS ELEMENTOS HTML

const formCadastro = document.getElementById("formCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");

const confirmacao = document.getElementById("confirmacao");
const termos = document.getElementById("termos");

// =====================================
// MENSAGENS ABSURDAS
// =====================================

const mensagensCadastro = [
    "CADASTRO RECUSADO! VOCÊ PARECE ORGANIZADO DEMAIS!",
    "ERRO 500: NOSSO ESTAGIÁRIO DERRUBOU O SERVIDOR IMAGINÁRIO!",
    "CADASTRO QUASE CONCLUÍDO. NÃO COMEMORE!",
    "PARABÉNS! VOCÊ PREENCHEU UM FORMULÁRIO SEM SENTIDO!",
    "SISTEMA CONFUSO. TENTE NOVAMENTE NUNCA!",
    "SEU CADASTRO FOI APROVADO PELO CONSELHO DAS BATATAS!",
];

// =====================================
// PROCESSAMENTO DO FORMULÁRIO
// =====================================

if (formCadastro && mensagemCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        // Impede o envio tradicional do formulário
        evento.preventDefault();

        // VERIFICAÇÃO DA PALAVRA
        if (confirmacao.value.trim().toUpperCase() !== "ABACAXI") {
            mensagemCadastro.textContent =
                "ERRO! VOCÊ NÃO CONSEGUIU DIGITAR ABACAXI!";

            mensagemCadastro.style.color = "red";

            return;
        }

        // VERIFICAÇÃO DOS TERMOS
        if (!termos.checked) {
            mensagemCadastro.textContent =
                "VOCÊ PRECISA CONFIRMAR QUE NÃO LEU OS TERMOS!";

            mensagemCadastro.style.color = "red";

            return;
        }

        // SORTEIO DE UMA MENSAGEM
        const indice = Math.floor(Math.random() * mensagensCadastro.length);

        mensagemCadastro.textContent = mensagensCadastro[indice];

        mensagemCadastro.style.color = "blue";

        // LIMPA O FORMULÁRIO
        formCadastro.reset();
    });
}

// =====================================
// MENSAGEM NO CONSOLE
// =====================================

console.log("MÓDULO DE CADASTRO HORRIBLE WEB 2000 INICIADO!");
