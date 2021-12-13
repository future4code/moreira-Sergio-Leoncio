// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   array = array.length
    return array
  }

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array = array.reverse()
  return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

  return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPar = []
  for(let numero of array){
    if(numero % 2 ===0 ){
      numerosPar.push(numero) 
    }
  }
  return numerosPar
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const numerosPar = []
  for(let numero of array){
    if(numero % 2 ===0 ){
      numerosPar.push(numero **2) 
    }
  }
  return numerosPar
}
 
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let item of array){
      if(item>maiorNumero){
        maiorNumero = item
      }
    }    
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let numeroMaior
  let maiorDivisivel
  let numeroMenor
  
  if(num1 > num2){
    numeroMaior = num1
    numeroMenor = num2
  }else{
    numeroMaior = num2
    numeroMenor = num1
  }
    maiorDivisivel = numeroMaior % numeroMenor === 0
    let diferença = numeroMaior - numeroMenor

  return `maiorNumero: ${numeroMaior}, maiorDivisivelporMenor: ${maiorDivisivel}, diferenca: ${diferença}`
 
  
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}