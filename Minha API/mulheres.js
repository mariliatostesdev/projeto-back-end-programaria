const express = require('express');
const app = express();

const porta = 3333;
app.listen(porta, mostraPorta);

function mostraPorta() {
	console.log('Servidor criado e rodando na porta: ', porta);
}

// --------------

const router = express.Router();

// Vamos criar um Array de Objetos mulheres
const mulheres = [
	{
		nome: 'Marília Ribeiro Tostes',
		imagem:
			'https://avatars.githubusercontent.com/u/133540781?s=400&u=d2a0e65c0661e14557805ccdc75e3fa239ed7e70&v=4',
		minibio: 'Desenvolvedora Java Web Full Stack ',
	},

	{
		nome: 'Simara Conceição',
		imagem: 'https://bit.ly/3LJIyOF',
		minibio: 'Desenvolvedora e instrutora',
	},

	{
		nome: 'Iana Chan',
		imagem: 'https://bit.ly/3JCXBqP',
		minibio: 'CEO & Founder da PrograMaria',
	},

	{
		nome: 'Luana Pimentel',
		imagem: 'https://bit.ly/3FKpFaz',
		minibio: 'Senior Staff Software Engineer',
	},
];

function mostraMulheres(request, response) {
	response.json(mulheres);
}

app.use(router.get('/mulheres', mostraMulheres));
