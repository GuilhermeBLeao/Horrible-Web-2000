/* =====================================
   HORRIBLE WEB 2000
   FORMULÁRIO DE CONTATO
   ===================================== */

// =====================================
// LOCALIZAÇÃO DOS ELEMENTOS HTML
// =====================================
const formContato = document.getElementById("formContato");
const respostaContato = document.getElementById("respostaContato");

// =====================================
// RESPOSTAS AUTOMÁTICAS
// =====================================
const respostasAutomaticas = [
    "SUA MENSAGEM FOI ENVIADA PARA LUGAR NENHUM!",
    "OBRIGADO PELO CONTATO. NÃO RESPONDEREMOS!",
    "ERRO 404: FUNCIONÁRIO NÃO ENCONTRADO!",
    "SUA RECLAMAÇÃO FOI IGNORADA COM SUCESSO!",
    "NOSSA EQUIPE ESTÁ ANALISANDO SUA MENSAGEM DESDE 1998!",
    "PARABÉNS! VOCÊ ACABA DE FALAR SOZINHO!",
];

// =====================================
// PROCESSAMENTO DO FORMULÁRIO
// =====================================
if (formContato && respostaContato) {
    formContato.addEventListener("submit", function (evento) {
        // IMPEDE O ENVIO TRADICIONAL DO FORMULÁRIO
        evento.preventDefault();

        // VERIFICA SE EXISTEM RESPOSTAS DISPONÍVEIS
        if (respostasAutomaticas.length === 0) {
            respostaContato.textContent =
                "ERRO 500: NENHUMA RESPOSTA FOI ENCONTRADA!";
            return;
        }

        // SORTEIA UMA RESPOSTA
        const indice = Math.floor(Math.random() * respostasAutomaticas.length);

        // EXIBE A RESPOSTA
        respostaContato.textContent = respostasAutomaticas[indice];
        respostaContato.style.color = "red";
        respostaContato.style.fontSize = "25px";

        // LIMPA OS CAMPOS DO FORMULÁRIO
        formContato.reset();
    });
}

// =====================================
// MENSAGEM NO CONSOLE
// =====================================
console.log("ATENDIMENTO HORRIBLE WEB 2000 INICIADO!");
