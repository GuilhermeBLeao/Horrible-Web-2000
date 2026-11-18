/* =====================================
   HORRIBLE WEB 2000
   EFEITOS GERAIS
   ===================================== */

// =====================================
// AVISO QUE MUDA DE PERSONALIDADE
// =====================================
const avisoConstrucao = document.querySelector(".aviso-construcao");

if (avisoConstrucao) {
    const textoOriginal = avisoConstrucao.textContent;
    const mensagens = [
        "ESTAMOS TRABALHANDO... OU NÃO!",
        "SITE EM CONSTRUÇÃO DESDE 1998!",
        "NÃO TEMOS PREVISÃO DE CONCLUSÃO!",
        "NOSSO ESTAGIÁRIO ESTÁ DE FÉRIAS!",
        "ERRO 500: CONSTRUÇÃO NÃO ENCONTRADA!",
    ];

    avisoConstrucao.addEventListener("mouseenter", function () {
        const indice = Math.floor(Math.random() * mensagens.length);
        avisoConstrucao.textContent = mensagens[indice];
    });
    avisoConstrucao.addEventListener("mouseleave", function () {
        avisoConstrucao.textContent = textoOriginal;
    });
}

// =====================================
// RODAPÉ QUE RECLAMA DO VISITANTE
// =====================================
const rodape = document.querySelector(".rodape-final");

if (rodape) {
    rodape.addEventListener("click", function () {
        const reclamacoes = [
            "PARE DE CLICAR NO MEU RODAPÉ!",
            "VOCÊ NÃO TEM NADA MELHOR PARA FAZER?",
            "ESTE RODAPÉ EXIGE RESPEITO!",
            "CLIQUE DETECTADO. PACIÊNCIA ESGOTADA!",
            "ERRO 403: ACESSO AO BOM SENSO NEGADO!",
        ];

        const indice = Math.floor(Math.random() * reclamacoes.length);
        rodape.textContent = reclamacoes[indice];
    });
}

// =====================================
// SEGREDO DA EMPRESA
// =====================================
const btnSobre = document.getElementById("btnSobre");
const mensagemSobre = document.getElementById("mensagemSobre");

if (btnSobre && mensagemSobre) {
    btnSobre.addEventListener("click", function () {
        const segredos = [
            "NOSSO SEGREDO É NÃO TER SEGREDO!",
            "A EMPRESA FOI FUNDADA POR UMA BATATA!",
            "NOSSO SERVIDOR É UM COMPUTADOR DESLIGADO!",
            "NÃO SABEMOS COMO ESTE SITE FUNCIONA!",
            "NOSSO MAIOR CLIENTE É NOSSO PRÓPRIO ESTAGIÁRIO!",
            "A DIRETORIA ESTÁ PROCURANDO A PORTA DE SAÍDA!",
        ];
        const indice = Math.floor(Math.random() * segredos.length);
        mensagemSobre.textContent = segredos[indice];
    });
}
