const diversosArray = [false, 11, `vinte`]
const numeroArray = [4,7,10]
const stringsArray = [`martelo`, `geladeira`, `celular`]
const diversosArrayCopia = diversosArray.slice()
const numeroArrayCopia = numeroArray.slice()
const stringsArrayCopia = stringsArray.slice()

//A
diversosArrayCopia.unshift(255)
console.log(diversosArray)
console.log(diversosArrayCopia)

//B
numeroArrayCopia.pop()
console.log(numeroArray)
console.log(numeroArrayCopia)

//C
stringsArrayCopia.splice(1,1)
console.log(stringsArray)
console.log(stringsArrayCopia)
