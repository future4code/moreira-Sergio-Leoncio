//AULA - OBJETOS
// EXERCICOS DE INTERPRETAÇÃO DE CODICO

    //EXERCICIO 1

        /* resposta  a) Matheus Nachtergaele
                        Virginia Cavendish
                        Globo 14h */

    //EXERCICIO 2

        /*resposta a) vai imprimir o nome, idade e raça dos três animais
          resposta b) se chama SPREAD OPERADOR, cópia chave e o valor de um objeto inteiro.*/

    //EXERCICIO 3
    
        /*resposta  a) false e undefined
                    b) no primeiro console só foi mencionado o objeto pessoa e um valor(backender)
                        já no segundo console não foi atribuido o valor(altura) no objeto pessoa */

//EXERCICIOS DE ESCRITA DE CODIGO

    //EXERCICIO 1

    
        /* const pessoa = {
            
            nome: "Amanda",
            apelidos: ["Amandinha", "Mandinha", "Mandi"]
        }
        
           console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)

        
        const novaPessoa = {

            ...pessoa,
            nome: "Sergio",
            apelidos: ["Serjao", "Serginho", "sergioMalandro"]

        }
           console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}`)
 */
        //EXERCICIO 2

        const agenda = [
            {
                nome: "Sergio",
                idade: 49,
                profissao: "Dev"
            },

            {
                nome: "Augusto",
                idade: 13,
                profissao: "estudante"        
            }
        ]

           function listaAgenda(agenda)  {

                const indiceAgenda = (agenda) => {
               return [agenda.nome, agenda.idade.lenght, agenda.idade, agenda.profissao.lenght]
                }
           }              
           console.log(listaAgenda(agenda))

           
        
        
