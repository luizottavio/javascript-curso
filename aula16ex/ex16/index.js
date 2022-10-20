let num = document.querySelector('input#num1');
let lista = document.querySelector('select#setnum');
let res = document.querySelector('div#res');
let valores = [];

function lisNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function numLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (lisNumero(num.value) && !numLista(num.value, valores)) {
       valores.push(Number(num.value));
       let item = document.createElement('option');
       item.text = `Valor ${num.value} adicionado.`;
       lista.appendChild(item);
       res.innerHTML = ``
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ``;
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Incira os dados primeiro.');
    } else {
        let total = valores.length
        let maiorn = valores[0];
        let menorn = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maiorn) {
                maiorn = valores[pos]
            } 
            if (valores[pos] < menorn) {
                menorn = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ``
        res.innerHTML +=  `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML +=  `<p>O maior valor informado foi ${maiorn}.</p>`
        res.innerHTML +=  `<p>O menor valor informado foi ${menorn}.</p>`
        res.innerHTML +=  `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML +=  `<p>A media dos valores é  ${Math.round(media)}.</p>`
    }
}