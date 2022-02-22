var agora = new Date() /* Puxar a hora atul do sistema */
var hora = agora.getHours() /* extrair apenas a Hora cheia */

if (hora < 5) {
    console.log('Boa madrugada!')
} else if ( hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}