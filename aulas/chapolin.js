const { inherits } = require('util')
const { EventEmitter } = require('events')

function Personagem(nome) {
    this.nome = nome
}

inherits(Personagem, EventEmitter)

const chapolin = new Personagem('Chapolin')
chapolin.on('ajuda', () => {
    console.log('Eu! o Chapolin Colorado!');
})

console.log('E agora? Quem poderá me defender?')
chapolin.emit('ajuda')