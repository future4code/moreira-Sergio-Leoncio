class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }

      public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getPassword(): string {
          return this.password
      }     
      
  }

//Exercicio 1

//letra A : não, por está private

//letra B : 3

const outro = new User("1", "gmail", "Sergio", "123")
console.log(outro.getEmail())
console.log(outro.getId())
console.log(outro.getName())


//Exercicio 2

//letra A : 5

//letra B : 3 porque não foi criado um get da senha
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  const usuario = new Customer("2", "gmail", "usuario", "123", "1")
  const sergio = new User("1", "@gmail", "Sergio", "123")
  console.log(usuario.getCreditCard(), usuario.getEmail(), usuario.getId(), usuario.getName(), usuario.purchaseTotal)  
  console.log(sergio.getEmail(), sergio.getName(), sergio.getId())
    
//Exercicio 3

//Letra A : sim é possivel, desde que declare uma funçao get public

const costa = new Customer("2", "gmail", "usuario", "123", "0")
console.log(costa.getCreditCard(), costa.getEmail(), costa.getId(), costa.getName(), costa.getPassword(), costa.purchaseTotal)

//Exercicio 4

//Letra B :

console.log(costa.interoduceYourself())

//Exercicio 5

console.log(costa.interoduceYourself())

//Polimorfismo

//Exercicio 1
//letra A :  todas, não, porque é uma interface 

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

console.log(client.name)
console.log(client.consumedEnergy)
console.log(client.registrationNumber)
console.log(client.calculateBill())

//Exercicio 2

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//const conta = new Place("71.994-390")

//Letra A : Não é possível criar uma instância de uma clase abstrata.

//Letra B : Teria que mudar tipo da class abstract

//Exercicio 3

//1) class Place ou extenter para uma  nova class
//2) é uma entidade

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }

  const residencia = new Residence(2 , "781") 
  console.log(residencia.getCep())
  
  const comercio = new Commerce(1, "701")
  console.log(comercio.getCep())

  const industria = new Industry(3, "791")
  console.log(industria.getCep)

  



