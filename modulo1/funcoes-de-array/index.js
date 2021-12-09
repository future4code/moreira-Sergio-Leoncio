//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

    //EXERCICIO 1

        // a) Objeto => nome e apelido => posição do array

    //EXERCICIO 2

        // a) ['Amanda Rangel', 'Laís Petra', 'Letícia chijo']

    //EXERCICIO 3

        /* a) nome:"Amanda Rangel", apelido: "Mandi"
              nome:"Laís Petra", apelido: "Laura" */

//EXERCICIOS DE ESCRITA DE CODIGO

    //EXERCICIO 1

    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]   
     //a)
     const nomePet = pets.map((item) => {
        return item.nome
     })
     console.log(nomePet) 

    //b) 
     function racaPet(item){
        return item.raca === "Salsicha"
     }
     const listaRaca = pets.filter(racaPet)
     console.log(listaRaca)

     //c)
     const poodleRaca = pets.filter((item) =>{
         return item.raca === "Poodle"
     })

     const poodleMsn = poodleRaca.map((item) =>{
        return `Voçê ganhou um cupom de desconto de 10% para tosar o(a) ${item.nome}"}!`

     })
     console.log(poodleMsn)
     
     //EXERCICIO 2

     const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
     //a)
     const nomeProdutos = produtos.map((item) => {
        return item.nome
     })
     console.log(nomeProdutos)

     //b)
     const novaLista = produtos.map((item) => {         
        return item.nome + " " + Number((item.preco -(item.preco * 0.05)).toFixed(2))
     })
     console.log(novaLista)

     //c)
     const listaBebidas = produtos.filter((item, indice) =>{
         return item.categoria === "Bebidas"
     })
     console.log(listaBebidas)

     //d
     const listaNome = produtos.filter((item, indice, vetor) =>{
         return item.nome.includes("Ypê")
     })
     console.log(listaNome)

     //e)
     const frase = listaNome.map((item) =>{
         return `Compre ${item.nome} por ${item.preco}`
     })
     console.log(frase)

