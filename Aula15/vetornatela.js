let valores = [8,1,7,4,2,9]

/* console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */

/* for (var count=0; count < valores.length; count++) {
    console.log(`A posição ${count} do vetor é ${valores[count]}`)
} */

/* simplificando o for */

for ( let pos in valores) { /* Para cada posição (pos) na variavel (valores) faça ... */
    console.log(`A posição ${pos} do vetor é ${valores[pos]}`)
}


/* Procurando valores... */

console.log(valores.indexOf(4)) /* procurando o 4 */
console.log(valores.indexOf(3))