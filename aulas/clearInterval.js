const intervalo = 1000
let contador = 10

const contagemRegressiva = () => {
    if (contador >= 0) {
        console.log(contador--)
    } else {
        clearInterval(cronometro)
        lancarFoguete()
    }
}

const lancarFoguete = () => {
    console.log('Decolando...')
}

const cronometro = setInterval(contagemRegressiva, intervalo)
