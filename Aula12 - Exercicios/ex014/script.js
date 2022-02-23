function carregar() {
    var msg = document.getElementById('msg') /* mensagem que vi ser trocada */
    var imagem = document.getElementById('imagem') /* foto que vai ser trocada */

    var data = new Date();
    /* var hora = data.getHours(); */

    var hora = 23
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora <=12) {
        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >12 && hora <=18) {
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
} 
