/*Parte 1
//A
const a = 5 > 20 && 5 > 2
console.log(a) //false
//B
const b = 5 === 5 || 5 === "5"
console.log(b) //true
//C
const c = !(20 > 50)
console.log(c) //true
//D
const d = !(20 > 50 || 50 > 60)
console.log(d) //true*/

//Parte 2

console.log('Nome: Fulano da Silva')

let sal = 2000
let ac = 45.5 * 2
let comj = 5784.5 * 0.1
let comf = 3418.41 * 0.1
let comma = 4124.1 * 0.1
let coma = 1874 * 0.1
let comm = 7000 * 0.1
let comju = 9450 * 0.1

//1)

console.log('Qual seu salário fixo mas auxílio creche? R:', sal + ac)

//2)

console.log(
  'Fulano receberá',
  comj,
  'de comissão referente ao mês de janeiro - R:'
)

//3)

console.log(
  'Fulano terá descontado pelo INSS em janeiro o valor de - R:',
  (sal + comj) * 0.05
)

//4)

console.log(
  'O calculo do salário de todos os meses com respectivos acrescimos e descontos - R:',
  (sal * 6 + ac * 6 + comj + comf + comma + coma + comm + comju) * 0.95
)

//5)

console.log(
  'A média do salário em seis meses - R:',
  (sal * 6 + ac * 6 + comj + comf + comma + coma + comm + comju) / 6
)
