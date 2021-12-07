//AULA CONDICIONAIS
//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

    //EXERCICIO 1

        /* A) CRIOU UM VARIAVEL COM PROMPT PARA QUE O USUARIO DIGITE UM NUMERO;
              CRIOU OUTRA VARIALVE PARA GUARDAR O NUMERO DIGITADO;
              CRIOU UMA AÇÃO SE NUMERO DIGITADO FOR IGUAL A ZERO - PASSA NO TESTE;
              E SE FOR DIFERENTE - NÃO PASSA NO TESTE.*/
        
        /*  B) NUMEROS PARES */

        /*  C) NUMEROS IMPARES */

    //EXERCICIO 2

        /* A) SWITCH - UMA MANEIRA DE SIMPLIFICAR O CODIGO

        /* B) O PREÇO DA FRUTA MAÇA É R$2.25

        /* C) PERA SEM BREAK - O PREÇO DA FRUTA PERA É R$5 ;
              PERA COM BREAK - O PREÇO DA FRUTA PERA É R$5,50 */
    
    //EXERCICIO 3

        // A) CRIOU UMA VARIAVEL COM PROMPT PARA QUE DIGITE UM NUMERO

        /* B) 10 - ESSE NUMERO PASSOU NO TESTE;
             -10 - NÃO APARECE NADA */
        
        /* C) ERRO CONSOLE.LO(MENSAGEM), ESTÁ DENTRO DO ESCOPO PAI, ONDE
              O ESCOPO PAI NÃO LÊ A VARIAVEL QUE SE ENCONTRA DENTRO DO 
              ESCOPO FILHO */

//EXERCICIO DE ESCRITA DE CODIGO

    //EXERCICIO 1

     /* let idadeUsuario = Number(prompt("Qual sua idade?"))
      

        if (idadeUsuario >= 18) {
            console.log("Você pode dirigir")
            } else {
                console.log("Você não pode dirigir")
         } */
  
    //EXERCICIO 2

         /* const matutino = "M"  
         const vespertino = "V"
         const noturno = "N"       
         
         const aluno = prompt("Digite:(M) Matutino, (V) Vespertino, (N) Noturno")

         if(aluno === matutino) {
             console.log("Boma dia!")
         } else if(aluno === vespertino) {
             console.log("Boa tarde!")
         } else {
             console.log("Boa Noite!")
         }
 */
    //EXERCICIO 3

      /*   const matutino = "M"  
        const vespertino = "V"
        const noturno = "N"       
    
        const aluno = prompt("Digite:(M) Matutino, (V) Vespertino, (N) Noturno")
           
            switch(aluno) {
                case matutino:
                    console.log("Bom dia!")
                    break
                case vespertino:
                    console.log("Boa tarde!")
                    break
                case noturno:
                    console.log("Boa noite!")
                    break
                default:
                    console.log("NÃO HÁ MATRICULA")
                    break
            }
 */
    //EXERCICIO 4
            const fantasia = true
            const filmeGenero = prompt("Qual gênero do filme?")
            const preçoFilme = Number(prompt("Qual valor do Cinema?"))
            const valorCinema = Number(preçoFilme)

            if(filmeGenero === fantasia) {
                console.log("Bom filme!")
            } else if(valorCinema <= 15) {
                console.log("Bom filme:")
            } else {
                console.log("Escolha outro filme:")
            }
