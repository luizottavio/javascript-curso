function tabuada() {
    let numero = document.getElementById('txt1');
    let tabuada = document.getElementById('tab'); 
    if(numero.value.length == 0) {
        alert('Digite um número');
    } else {
        let n = Number(numero.value);
        tabuada.innerHTML = ``
        for(let c = 1; c <= 20; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item);
        }
    }


}