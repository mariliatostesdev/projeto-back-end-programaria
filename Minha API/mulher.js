const express = require('express');

const app = express();
const porta = 3333;

function mostraPorta() {
	console.log('Servidor criado e rodando na porta: ', porta);
}

app.listen(porta, mostraPorta);

// --------------

const router = express.Router();

// Vamos usar o .json (Como queremos receber um Objeto mulher, ao invés de mandar em texto com o .send, vamos mandar em formato JSON)
// A função recebe parâmetros de requisição e resposta (request, response) -> Para indicar que vou associar essa função a um verbo - nesse caso, GET
function mostraMulher(request, response) {
	response.json({
		nome: 'Marília Ribeiro Tostes',
		imagem:
			'https://avatars.githubusercontent.com/u/133540781?s=400&u=d2a0e65c0661e14557805ccdc75e3fa239ed7e70&v=4',
		minibio: 'Desenvolvedora Java Web Full Stack ',
	});
}

// Vamos agora criar o endereço '/mulher', e dizer que quando o usuário acessar esse endereço, o navegador execute mostraMulher().
// Vamos querer usar o quê da rota? O Get! -> get('<path>', function())
// Quero que o servidor tenha/use a rota GET, chamando o endereço '/mulher', e quando isso acontecer, mostraMulher()) será chamada.
app.use(router.get('/mulher', mostraMulher));
