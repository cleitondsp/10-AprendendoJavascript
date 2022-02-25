var array = []
var num = document.getElementById('txtN');
var arquivo = document.getElementById('selNumeros')


function adicionar() {     
    
    let add = Number(num.value)
    let res = document.getElementById('resultados')
    res.innerHTML = ''

    if (add <= 0 || add > 100) {

        alert('Numero inválido, tente novamente!')
    
    } else {

        if (array.indexOf(add) >= 0) {
             
            alert('Numero ja existente, tente novamente.')
            

        } else {
            
            let item = document.createElement('option')
            item.text = `Valor ${add} adicionado.`
            arquivo.appendChild(item)
            array.push(add) 
            num.value = ''          

        }
    }  

    num.value = ''
    num.focus()
}

function finalizar() {

    if (array.length == 0) {

        alert('Adicione valores antes de finalizar')

    } else {

        let res = document.getElementById('resultados')
        let total =array.length
        
        /* verificar o maior e o menor */

        var menor = array[0]
        var maior = array[0]

        for (let pos in array) {

            if (array[pos] > maior) {
                maior = array[pos]
            }

            if(array[pos] < menor) {
                menor = array[pos]
            }
        }

        /* verificar o soma */

        var soma = 0

        for (let pos in array) {

            soma += array[pos]
        }

        /* verificar o media */

        media = soma / total
        

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limpar() {

    let res = document.getElementById('resultados')
    let arquivo = document.getElementById('selNumeros')   
    arquivo.innerHTML = ''    
    res.innerHTML = ''
    
}





