type Person = {
    nome: string,
    dataNasc: string
}

function dados(person: Person) {
    const data: string[] = person.dataNasc.split('/')
    console.log(`Olá me chamo ${person.nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`)

}
dados({nome:'sergio', dataNasc:'13/05/1972'})