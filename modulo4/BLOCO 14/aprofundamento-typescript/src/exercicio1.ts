 //Exercicio 1
 // Letra a)
//Se atribuir um número o Typescript acusa erro.
 const minhaString: string = 'oi'

//Letra b)
//se chama union type, inserindo uma | entre os tipos.
const meuNumero: number | string = 'oi'

//Letra d)
enum Cores { 
    AZUL = "Azul",
    AMARELO = "Amarelo",
    VERMELHO="Vermelho"
 }

//Letra c)
type pessoa = {
    'nome':string, 
    'idade':number, 
    'corFavorita': Cores 
}

    const Sergio: pessoa = {
        nome: 'Sergio',  
        idade: 49, 
        corFavorita: Cores.AZUL
    }
    const Claudia: pessoa = {
        nome: 'Claudia', 
        idade: 49, 
        corFavorita: Cores.AMARELO 
    }
    const Augusto: pessoa = {
        nome: 'Augusto', 
        idade: 14, 
        corFavorita: Cores.VERMELHO
    }

type Lista = pessoa[]
const lista:Lista=[]
lista.push(Sergio)
lista.push(Claudia)
lista.push(Augusto)
console.log(lista)
