const num1 = console.log (Number(prompt("Digite o primeiro número:")))
const num2 = console.log (Number(prompt("Digite o segundo número:")))

console.log("O primeiro número é maior que o segundo? - R:", num1 > num2)
console.log("O primeiro número é igual ao segundo? - R:", num1 === num2)
console.log("O primeiro número é divisível pelo segundo? - R:", num1 % num2 === 0)
console.log("O segundo número é divisível pelo primeiro? - R:", num2 % num1 === 0)