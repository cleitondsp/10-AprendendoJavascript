/* fatorial
ex: 5 = 5*4 + 5*3 + 5*2 + 5*1 */

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))