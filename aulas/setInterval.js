const intervalo = 1000
let contador = 1
function contar () {
    console.log(contador++);
}

setInterval(contar, intervalo)