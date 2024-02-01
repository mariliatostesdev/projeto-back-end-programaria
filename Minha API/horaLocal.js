const express = require('express');
const app = express();
const router = express.Router();

const porta = 3333;
app.listen(porta, mostraPorta);
app.use(router.get('/hora-local', mostraHora));

function mostraPorta() {
	console.log('Servidor criado e rodando na porta: ', porta);
}

function mostraHora(request, response) {
	const data = new Date();
	const hora = data.toLocaleTimeString('pt-BR');
	response.send(hora);
}

// ---------
