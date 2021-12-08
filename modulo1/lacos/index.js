//EXERCICIOS DE INTERPRETAÇAO DE CODIGO

    //EXERCICIO 1

        /* for=>permite simplificar condição de continuação
        atrelada a um número que é incrementado.
            resultado do console: 10 */

    //EXERCICIO 2

        // a) Numeros > 18 : [19,21,23,25,27,30]

        /*  const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        
for (let numero of lista) {  
  if (numero > 18) {
		console.log(numero)
	}
} */

    //EXERCICIO 3

        // *
        // **
        // ***
        // ****

//EXERCICIOS DE ESCRITA DE CODIGO

    //EXERCICIO 1

        /* let pet = Number(prompt("Quantos bichinhos de estimação voçê tem?"))
       
        
        if(pet === 0 ){
            console.log("Que pena! Você pode adotar um pet!")
       }        
        if(pet > 0){
            const listaPet = []
            
            for(let i=0; i < pet; i++){
                const petUsuario = prompt("digite quantos pet voce tem")
                listaPet.push(petUsuario)
            }
            console.log(listaPet)
        }
 */

    //EXERCICIO 2

        const arrayOriginal = [10, 20, 30, 40, 50]

        function imprimeValores(array){
            for(let valor of array){
                console.log(valor)
            }
        }
        imprimeValores(arrayOriginal)

        function imprimaDividido(array){
            for(let valor of array){
                let valorDividido = valor / 10
                console.log(valorDividido)
            }
        }
        imprimaDividido(arrayOriginal)

        function imprimaPares(array){
            const listaPares = []

            for(let numero of array){
                if(numero % 2 === 0){
                    listaPares.push(numero)
                }
            }
            console.log(listaPares)
        }
        imprimaPares(arrayOriginal)