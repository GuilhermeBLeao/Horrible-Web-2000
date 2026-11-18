/* =====================================
   HORRIBLE WEB 2000
   JAVASCRIPT PRINCIPAL
   ===================================== */

// =====================================
// LOCALIZAÇÃO DOS ELEMENTOS HTML
// =====================================
const btnInicio = document.getElementById("btnInicio");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contadorVisitantes");

// =====================================
// BOTÃO QUE NÃO DEVERIA SER CLICADO
// =====================================
if (btnInicio && mensagem) {
    btnInicio.addEventListener("click", function () {
        mensagem.textContent = "PARABÉNS! VOCÊ CLICOU NO BOTÃO ERRADO!";
        alert("ERRO 404: SUA DECISÃO NÃO FOI ENCONTRADA!");
    });
}

// =====================================
// BOTÃO DE AJUDA QUE NÃO AJUDA
// =====================================
const btnAjuda = document.getElementById("btnAjuda");
const mensagemAjuda = document.getElementById("mensagemAjuda");

function mostrarAjudaInutil() {
    const respostas = [
        "Já tentou desligar e ligar sua paciência?",
        "Aguarde... estamos consultando um estagiário imaginário.",
        "Sua dúvida é muito importante. Infelizmente, não sabemos a resposta.",
        "Erro 500: ajuda temporariamente indisponível desde 1998.",
        "Parabéns! Você desbloqueou o nível 2 de confusão.",
    ];

    const indice = Math.floor(Math.random() * respostas.length);
    mensagemAjuda.textContent = respostas[indice];
}

if (btnAjuda && mensagemAjuda) {
    btnAjuda.addEventListener("click", mostrarAjudaInutil);
}

// =====================================
// CONTADOR MENTIROSO
// =====================================
if (contador) {
    let visitantes = 999999;
    contador.textContent = visitantes;
    setInterval(function () {
        const variacao = Math.floor(Math.random() * 100);
        visitantes = Math.max(
            0,
            visitantes + (Math.random() > 0.5 ? variacao : -variacao),
        );
        contador.textContent = visitantes;
    }, 2000);
}

// =====================================
// MENSAGEM NO CONSOLE
// =====================================
console.log("HORRIBLE WEB 2000 iniciado com sucesso!");
