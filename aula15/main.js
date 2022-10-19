let num = [9, 4, 6];

// adicionar um elemento
num.push(5)

// quantas posições tem o vetor?
console.log(`O vetor tem ${num.length} Posições`)

// O que tem na posição 3?
console.log(`${num[3]}`);

// em quel posição está o num 4?
let pos = num.indexOf(4)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}


/*for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos]);
}*/