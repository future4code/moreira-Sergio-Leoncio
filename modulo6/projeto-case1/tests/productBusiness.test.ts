import { ProductBusiness } from "../src/business/ProductBusiness"
import { SignupInputDTO } from "../src/types/signupInputDTO"
import { ProductDatabaseMock } from "./mocks/ProductsDatabaseMock"

const productBusinessMock = new ProductBusiness(
  new ProductDatabaseMock() as any
)

describe("Create test", ()=>{  
  test("Success in registration", async () => {
      expect.assertions
      const input: SignupInputDTO = {
        id: 888,
        name: "Dress",
        tags: ["metal","bronze","cobre"]
      }
      try {
          const inserir =  await productBusinessMock.create( input )
          
          expect(inserir).toEqual({
            message: "Product registered successfully!"
        })
        
      } catch (error) {
          console.log(error)
      }
  })
})

describe("Search test", () => {
  test("Erro que deve retornar quando o id fornecido não existe", async () => {
      expect.assertions
      const input: SignupInputDTO = {
        id: 888,
        name: "Dress",
        tags: ["metal","bronze","cobre"]
      }  
      try {
          await productBusinessMock.search(input)
      } catch (error:any) {
          if (!input) {
              expect(input).toEqual({message:"Params must be sent"})
          if(!input)
              expect(input).toEqual({message:"Product not found"})
              expect(error.statusCode).toEqual(401)
          } else {
              console.log(error)
          }
      }
  })
})