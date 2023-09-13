let num = [8,1,7,4,2,9]
var c = 0
/*for (let pos = 0; pos <= num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(7))