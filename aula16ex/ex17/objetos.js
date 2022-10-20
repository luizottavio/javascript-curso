
// Objetos
let amigo = {nome:'Luiz Otávio', 
anos:'18 anos', 
peso:'61', 
altura:"1,74", 
sexo:'m', 
proficao:'programador', 
engordar(l=0){
    console.log('Engordou')
    this.peso += l
}}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}`); 