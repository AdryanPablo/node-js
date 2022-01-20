const { EventEmitter } = require('events')
const evento = new EventEmitter()

evento.on('Olá', () => {
    console.log('Oi!');
})

evento.once('Olá, mundo!', () => {
    console.log('Olá, pequeno gafanhoto!');
})

evento.emit('Olá')
evento.emit('Olá')
evento.emit('Olá')
evento.emit('Olá')

evento.emit('Olá, mundo!')
evento.emit('Olá, mundo!')
evento.emit('Olá, mundo!')
