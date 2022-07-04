function button() {
    const button = document.createElement('button')
    button.innerHTML = 'Cadastrar Usuário'
    button.setAttribute('type', 'submit')
    const h1 = document.querySelector('h1')
    h1.parentNode.insertBefore(button, h1.nextSibling)
    button.addEventListener('click', addPlayer)
    }
button()

function calculaPontos(jogador) {
const pontos = (jogador.vitorias * 3 + jogador.empates)

return pontos
}

function exibirJogadoresNaTela(jogadores) {
let html = '';

for (let jogador in jogadores) {
    

    html += "<tr><td> " + jogadores[jogador].nome + "<img src=" + jogadores[jogador].srcImg + " height='40'>" + " </td>"
    html += "<td>" + jogadores[jogador].vitorias + "</td>"
    html += "<td>" + jogadores[jogador].empates + "</td>"
    html += "<td>" + jogadores[jogador].derrotas + "</td>"
    html += "<td>" + jogadores[jogador].pontos + "</td>"

   
    html += '<td><button onClick="adicionarVitoria(' + jogador + ')">Vitória</button></td>'
    html += '<td><button onClick="adicionarEmpate(' + jogador + ')">Empate</button></td>'
    html += '<td><button onClick="adicionarDerrota(' + jogador + ')">Derrota</button></td></tr>'

}
const tabelaJogadores = document.querySelector('#tabelaJogadores')

tabelaJogadores.innerHTML = html
}

const jogadoresParticipantes = []



function adicionarVitoria(jogador) {
let player = jogadoresParticipantes[jogador]
player.vitorias++
player.pontos = calculaPontos(player)
exibirJogadoresNaTela(jogadoresParticipantes)
}

function adicionarEmpate(jogador) {
let player = jogadoresParticipantes[jogador]
player.empates++
player.pontos = calculaPontos(player)
exibirJogadoresNaTela(jogadoresParticipantes)

}
function adicionarDerrota(jogador) {
let player = jogadoresParticipantes[jogador]
player.derrotas++
player.pontos = calculaPontos(player)
exibirJogadoresNaTela(jogadoresParticipantes)

}

function storePlayer() {
const player = {
    nome: prompt('Nome do jogador'),
    srcImg: prompt('Entre com a imgagem do jogador'),
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
return player;
}

function addPlayer() {
const newPlayer = storePlayer()
jogadoresParticipantes.push(newPlayer)
exibirJogadoresNaTela(jogadoresParticipantes)
}