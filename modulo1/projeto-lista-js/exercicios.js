// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite altura")
  const largura = prompt("Digite largura")
  const area = altura * largura

  console.log(area)
  
}
  calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
<<<<<<< HEAD
   
}
  
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}
=======
   const anoAtual = Number(prompt("ano atual:"))
   const anoNascimento = Number(prompt("ano de nascimento:"))
   const idade = anoAtual - anoNascimento 

   console.log(idade)
}
  imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    
     const imc = peso / (altura * altura)

     return imc
}    
   

 // EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
     const nome = prompt("Qual seu nome?")
     const idade = Number(prompt("Qual sua idade?"))
     const email = prompt("Qual seu email?")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
  imprimeInformacoesUsuario()
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
<<<<<<< HEAD

}
=======
      const cor1 = prompt("Qual a sua 1 cor Favorita?")
      const cor2 = prompt("Qual a sua 2 cor Favorita?")
      const cor3 = prompt("Qual a sua 3 cor Favorita?")
      const corFavorita = [cor1, cor2, cor3]
     
      console.log(corFavorita)
    }
      imprimeTresCoresFavoritas()
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
<<<<<<< HEAD

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

=======
     return `${string.toUpperCase()}`
    
} 
  
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
     const ingressoVendidos = custo / valorIngresso

     return ingressoVendidos
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  
    return string1.length === string2.length
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  
    return array[0]
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

<<<<<<< HEAD
=======
    return array[array.length - 1]
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  let numeroUm = array[0]
  let numeroCinco = array.pop()
  array.push(numeroUm)
  array[0] = numeroCinco
  
  return array
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
    return string1.toUpperCase() === string2.toUpperCase()
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
<<<<<<< HEAD

}
=======
    let ano = Number(prompt("ano atual:"))
    let nascimento = Number(prompt("ano de nascimento:"))
    let emissao = Number(prompt("ano de emissão do RG:"))
    let idade = ano - nascimento
    let identidade = ano - emissao

    let resultado1 = idade <= 20 && identidade >= 5
    let resultado2 = idade > 20 && idade<= 50 && identidade >= 10
    let resultado3 = idade > 50 && identidade >= 15

    console.log(resultado1 || resultado2 || resultado3)    
}
    checaRenovacaoRG()
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
<<<<<<< HEAD

}
=======
    let anoEscolhido = ano % 400
    let multiplos100 = ano % 100
    let multiplos4 = ano % 4

    return anoEscolhido === 0 || multiplos100 === 0 || multiplos4 === 0
}
    
>>>>>>> 30efb8081b2e4b83cebb9a00be10c49b51c41b54

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}