//a
const numeroArray = [5,24,2]
const stringsArray = [`calor`, `chuva`, `carro`]
const variosArray = [true, `tempo`, 16]

console.log(numeroArray.length)
console.log(stringsArray.length)
console.log(variosArray.length)

//b
console.log(`Primeiro item: ${numeroArray[0]}`)
console.log(`Segundo item: ${stringsArray[1]}`)
console.log(`Terceiro item: ${variosArray[2]}`)

//c
const tem24 = numeroArray.includes(24)
console.log(`Tem 24? ${tem24}`)
const tem10 = numeroArray.includes(10)
console.log(`Tem 10? ${tem10}`)
