export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type Address ={
   Estado:string,
   Cidade:string,
   Bairro:string,
   Logradouro:string,
   Cep:string,
   Complemnento:string,
   Numero:string
}

export type userAddress = {
   id: string
   name: string
   nickname: string
   email: string
   cep: {
      Estado:string
      Cidade:string
      Bairro:string
      Logradouro:string
      Cep:string
      Complemnento:string
      Numero:string
   }
}