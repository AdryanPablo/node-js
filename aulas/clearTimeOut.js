const tempoDeEspera = 3000
const concluido = () => console.log('Pronto!')

let timer = setTimeout(concluido, tempoDeEspera)

console.log('Eu vou aparecer primeiro.');
clearTimeout(timer)
