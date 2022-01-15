const path = require('path')
const hello = require('./exports.js')

console.log(`O nome deste arquivo é ${path.basename(__filename)}`)
console.log(hello)