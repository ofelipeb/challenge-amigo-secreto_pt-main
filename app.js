/**
 * Amigo Secreto
 * 
 * Este projeto foi desenvolvido por Felipe Barcellos como parte da turma 8 do programa ORACLE ONE EDUCATION.
 * A versão mais recente foi disponibilizada no GitHub na terça-feira, 18 de março de 2025.
 * 
 * Funcionalidades:
 * - Adicionar participantes ao sorteio.
 * - Sortear os amigos secretos.
 * - Exibir os resultados do sorteio.
 */

// Array para armazenar os nomes dos participantes
let participantes = [];

// Função para adicionar um nome ao array
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        participantes.push(nome);
        input.value = ''; // Limpa o campo de entrada
        atualizarListaAmigos();
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

// Função para atualizar a lista de participantes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    participantes.forEach((participante, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${participante}`;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return;
    }

    // Embaralha o array de participantes
    const embaralhado = participantes.slice().sort(() => Math.random() - 0.5);

    // Cria um mapa de amigos secretos
    const amigosSecretos = new Map();

    for (let i = 0; i < embaralhado.length; i++) {
        const participante = embaralhado[i];
        const amigoSecreto = embaralhado[(i + 1) % embaralhado.length];
        amigosSecretos.set(participante, amigoSecreto);
    }

    // Exibe os resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    amigosSecretos.forEach((amigo, participante) => {
        const item = document.createElement('li');
        item.textContent = `${participante} tirou ${amigo}`;
        resultado.appendChild(item);
    });
}
