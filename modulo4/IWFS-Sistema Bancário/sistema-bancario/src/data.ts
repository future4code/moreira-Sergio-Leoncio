export type conta = {
    cliente: string;
    cpf: number | string;
    dataNasc: number | string;
    saldoTotal: number;
    debitos: number[]
};

export const users: conta[] = [
    {
        cliente:"João",
        cpf: "021.233.471-30" ,
        dataNasc: "22/03/1997",
        saldoTotal: 1000 ,
        debitos: [100, 200, 300]
    },
    {
        cliente:"Paula",
        cpf: "625.340.120-07" ,
        dataNasc: "10/11/2002",
        saldoTotal: 7500 ,
        debitos: [200, 400, 1500]       
    },
    {
        cliente:"Pedro",
        cpf: "322.120.356-12" ,
        dataNasc: "28/06/2002",
        saldoTotal: 10000 ,
        debitos: [5140, 800, 3500]       
    },
    {
        cliente:"Luciano",
        cpf: "112.840.920-97" ,
        dataNasc: "12/04/1998",
        saldoTotal: 2500 ,
        debitos: [200, 400, 100]       
    },
    {
        cliente:"Artur",
        cpf: "830.112.521-87" ,
        dataNasc: "21/09/1999",
        saldoTotal: 600 ,
        debitos: [200, 400, 100]       
    },
    {
        cliente:"Sergio",
        cpf: "401.666.999-13" ,
        dataNasc: "13/05/2000",
        saldoTotal: 12000 ,
        debitos: [1500, 3500, 800, 900]       
    },
]   