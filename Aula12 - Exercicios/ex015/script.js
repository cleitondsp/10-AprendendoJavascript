function verificar() {
    var data = new Date()
    var ano = data.getFullYear() /* Ano atual */
    var fano = document.getElementById('txtano') /* Ano digitado */
    var res = document.getElementById('res') /* div com a saida do resultado */

    if (fano.value.length == 0 || fano.value > ano) {
        alert('erro')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''

       var img = document.createElement('img') /* criar a tag img */
       img.setAttribute('id','foto') /* colocando a id como 'foto' */
       

       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >-0 && idade < 10 ) {
               /* criança */
               img.setAttribute('src','bebeH.jpg')
           } else if (idade < 25) {
               /* jovem */
               img.setAttribute('src','jovemH.jpg')
           } else if (idade < 50) {
                /* Adulto */
                img.setAttribute('src','adultoH.jpg')
           } else {
               /* Idoso */
               img.setAttribute('src','idosoH.jpg')
            }

       } else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >-0 && idade < 10 ) {
            /* criança */
            img.setAttribute('src','bebeM.jpg')
        } else if (idade < 25) {
            /* jovem */
            img.setAttribute('src','jovemM.jpg')
        } else if (idade < 50) {
             /* Adulto */
             img.setAttribute('src','adultoM.jpg')
        } else {
            /* Idoso */
            img.setAttribute('src','idosoM.jpg')
         }
       }

       res.innerHTML = `Selecionado ${genero} com ${idade} anos`
       res.style.textAlign = 'center'
       res.appendChild(img) /* adicionando a tag img no documento */

    }

    


}