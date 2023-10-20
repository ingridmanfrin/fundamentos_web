let valor = 3

let valor2 = "3"

let nome ="João Maia"

const url = "http://google.com.br"

console.log(valor)
console.log(typeof(valor))

console.log(typeof(valor2))

console.log(url)

function ola(){
    console.log("Olá mundo!")
}
ola()

function soma(numero1, numero2){
    return numero1+numero2
}
console.log(soma(3, 5))

//arrow function
const olaMundo = () =>  console.log("Olá mundo 2!")
olaMundo()
//usamos const pq estrutura sempre será a mesma como na linha abaixo
const somaNum = (num1, num2) => num1+num2
//por mais que os valores dos parâmetros possam mudar 
console.log(somaNum(45, 54))