// RECURSIVIDADE
function fatarial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatarial(n-1);
    }
}

console.log(fatarial(5))