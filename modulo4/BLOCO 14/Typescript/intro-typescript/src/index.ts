//console.log('Hello, world!')

//Exercicio1
// function checaTriangulo(a:number, b:number, c:number): string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }
//   console.log(checaTriangulo(2,2,2))

//Exercicio2
// function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string):string[] {
//     const arrayDeCores = []

//     arrayDeCores.push(cor1,cor2,cor3) 
    
//     return arrayDeCores
// }
// console.log(imprimeTresCoresFavoritas("vermelho","preto","branco"))

//Exercicio3

// function checaAnoBissexto(ano:number):any {
//    const cond1 = ano % 400 === 0
//    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//    return cond1 || cond2
// }
// console.log(checaAnoBissexto(1980))

//Exercio4
// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }
// console.log(comparaDoisNumeros(49,90))

//Exrcicio5

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }
   console.log(checaRenovacaoRG(2022,1972,2005))