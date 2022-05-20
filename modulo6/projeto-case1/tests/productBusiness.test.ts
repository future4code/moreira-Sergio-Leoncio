import { ProductBusiness } from "../src/business/ProductBusiness"
import { SignupInputDTO } from "../src/types/signupInputDTO"
import { ProductDatabaseMock } from "./mocks/ProductsDatabaseMock"

const productBusinessMock = new ProductBusiness(
  new ProductDatabaseMock() as any
)

describe("teste do create", ()=>{
  
  test("Sucesso no cadastro", async () => {
      expect.assertions
      const input: SignupInputDTO = {
       id: 888,
        name: "Vestido",
        tags: ["metal","bronze","cobre"]
      }
      try {
          const inserir =  await productBusinessMock.create( input )
          
          expect(inserir).toEqual({
            message: "Produto cadastrado com sucesso!"
        })
        
      } catch (error) {
          console.log(error)
      }
  })
})