function soma(n1, n2) {
    return n1 + n2
}

let res = soma(2, 5);
console.log(res)


/* resolvendo conflitos */

function soma(n1=0, n2=0) { 
    /* nesse caso as variaveis que não possuirem visualViewport, terão 0 como padrão */
    return n1 + n2
}