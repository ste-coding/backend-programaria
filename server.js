const express = require("express"); // declaração da variável que importa o módulo express do nodeJS, ele é responsável por carregar o módulo express e retornar o objeto associado a ele
const app = express(); // estamos invocando a função express para criar um objeto que representa o nosso aplicativo da web

const porta = 3333; //criado a variável para definir em qual porta o servidor será executado

function mostraPorta(){ //imprime no console quando estiver funcionando
    console.log("Servidor criado e rodando na porta ", porta);
}

app.listen(porta, mostraPorta); //inicia o servidor e faça com que ele "ouça" a porta, e a partir disso ele executa a função mostraPorta
