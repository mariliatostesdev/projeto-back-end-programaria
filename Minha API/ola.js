const express = require('express');
const app = express();

const porta = 3333;
function mostraPorta() {
	console.log('Servidor criado e rodando na porta: ', porta);
}
app.listen(porta, mostraPorta);

// --------------

const router = express.Router(); // Configuração da rota: Router é uma função de configuração de rota que vem de dentro do Express.

// Quero que a função possa fazer uma requisição e enviar uma respost quando ela for chamada. Então temos que ter os parâmetros 'request' e 'response'.
// Vamos determinar o retorno. Quero que apareça na tela, não mais no console. Então vamos usar o parâmetro response.
function mostraOla(request, response) {
	response.send('Olá, mundo!'); // Quero que o servidor 'mande uma resposta'
}

// Vamos agora criar o endereço '/ola', e dizer que quando o usuário acessar esse endereço, o navegador execute mostraOla().
// Vamos querer usar o que da rota? O Get! -> get('<path>', function())
app.use(router.get('/ola', mostraOla)); // Quero que o servidor tenha/use a rota GET, chamando o endereço '/ola', e quando isso acontecer, mostraOla() será chamada.
