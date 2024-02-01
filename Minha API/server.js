const porta = 3333;
/* 3333: é a porta/parte do endereço para acessar o nosso servidor. Imagine que o computador é um andar de um prédio comercial.Cada porta desse andar tem um número e dá para um serviço diferente.Nosso programa servidor vai usar a sala / porta 3333.;*/

//Acessar Express: require -> acessar o NPM para pedir algo
const express = require('express');

//Chamada da função express
const app = express();

function mostraPorta() {
	console.log('Servidor criado e rodando na porta: ', porta);
}

//Vamos fazer o servidor rodar de verdade. -> express().listen(porta, mostraPorta)
//"Me fale se a porta 3333 está mesmo funcionando" -> "Depois de ouvir a porta (3333), chame a função mostraPorta()""
app.listen(porta, mostraPorta);
