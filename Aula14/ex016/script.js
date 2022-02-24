var inicio = document.getElementById('txtI')
var final = document.getElementById('txtF')
var passo = document.getElementById('txtP')
var msg = document.querySelector('div#msg')
var res = document.querySelector('div#res')


function contar() {

    let ini = Number(inicio.value)
    let fim = Number(final.value)
    let pas = Number(passo.value)

    if (ini != '' && fim != '' && pas != '' && ini < fim) {        

        res.innerHTML = ''

        for (count = ini; count <= fim; count = count + pas) {

            msg.innerHTML = 'Iniciando a contagem...<br>'
            res.innerHTML += `${count}  `
            
        }

    } else if (ini != '' && fim != '' && pas != '' && fim < ini) {

        res.innerHTML = ''

        for (count = ini; count >= fim; count = count - pas) {

            msg.innerHTML = 'Iniciando a contagem...<br>'
            res.innerHTML += `${count}  `
            
        }

    } else {

    zerar()
    msg.innerHTML = 'Impossível contar!!'
    res.innerHTML = 'Preencha todos os campos'
    contar()

    }
}        

function zerar() {

    inicio.value = ''
    final.value = ''
    passo.value = ''
    msg.innerText = ''
    res.innerText = ''
}