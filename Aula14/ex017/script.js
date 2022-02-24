
function tabuada() {
    var n = document.getElementById('txtN')
    var res = document.getElementById('res') 
    var numero = Number(n.value)
    var mul = 0
    var count = 0

    while (count < 11) {

        mul = numero * count
        res.innerHTML += `${numero} x ${count} = ${mul}<br>`
        count++

    }

}