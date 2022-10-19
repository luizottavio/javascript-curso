let num = [9, 3, 4, 1, 6, 7];

//num.sort()
num.push(8)
console.log(num)

/*
for (let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}