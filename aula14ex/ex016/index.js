function contar(){
    let inicio = document.getElementById('txt1');
    let fim = document.getElementById('txt2');
    let passo = document.getElementById('txt3');
    let res = document.getElementById('res');
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando...`
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        let c = i;
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i <= f) {
            while(c <= f) {
                c += p
                res.innerHTML += ` 👉 ${c} `
            }
        } else {
            while(c >= f) {
                c -= p
                res.innerHTML += ` 👉 ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}