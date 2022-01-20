const tempoDeEspera = 2000
const pronto = () => console.log('Eu vou aparecer depois.')

setTimeout(pronto, tempoDeEspera)
console.log('Eu vou aparecer antes.');