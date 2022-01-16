const getFlagValue = module.require('./getFlagValue.js')

console.log(`Oi, ${getFlagValue('--nome')}`)
console.log(getFlagValue('--mensagem'))