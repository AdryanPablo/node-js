const perguntas = [
    'O que eu aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz?',
    'Quantas pessoas eu ajudei hoje?'
]

const respostas = []

const perguntar = (index = 0) => {

    process.stdout.write('\n\n' + perguntas[index] + ' > ')

}

perguntar()

process.stdin.on('data', data => {
    respostas.push(data.toString().trim())

    if (respostas.length < perguntas.length) {
        perguntar(respostas.length)
    } else {
        console.log(respostas)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
        Que bacana!

        Hoje você aprendeu: ${respostas[0]}

        O que te deixou aborrecido e poderia melhorar foi: ${respostas[1]}

        O que te deixou feliz foi: ${respostas[2]}

        E você ajudou ${respostas[3]} pessoas hoje!

        Volte amanhã para novas reflexões
    `)
}) 