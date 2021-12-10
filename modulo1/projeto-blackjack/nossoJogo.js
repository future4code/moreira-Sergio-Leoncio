/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//MONTANDO O JOGO


const jogoCartas = "Boas vindas ao jogo de Blackjack!"
console.log(jogoCartas)

if(confirm("Quer iniciar uma nova rodada?")) {
   rodada()
}else {
   
   console.log("O jogo acabou")
}

function rodada() {
   const usuario = []
   const computador = []
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())

   console.log(usuario.map((item)=> `Usuario - cartas: ${item.texto} - pontuação ${item.valor}`))
   console.log(computador.map((item)=> `Computador - cartas: ${item.texto} - pontuação ${item.valor}`))

}

function soma(item, valor) {
   if(usuario.map(item.valor) === computador.map(item.valor)){
      console.log("Empate!")      
   }
}



