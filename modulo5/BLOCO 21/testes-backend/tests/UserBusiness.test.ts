import { UserBusiness } from "../src/business/UserBusiness"
import { CustomError } from "../src/errors/CustomError"
import HashGeneratorMock  from "./mocks/HashGeneratorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock"
import  UserDatabaseMock from "./mocks/UserDatabaseMock"

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock() as any,
    new IdGeneratorMock(),
    new TokenGeneratorMock(),
    new HashGeneratorMock()
)


describe("getUserById", () => {
	// (a)
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUserById("abc")
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error: any) {
      console.log(error.message)
    }
  })
})





describe("Teste de signUp", () => {
    test("Erro que deve retornar quando o nome está vazio", async () => {
        expect.assertions(2)
        try {
            await userBusinessMock.signup(
                "",
                "flavio@lab.com",
                "flavio123",
                "ADMIN"
            )
        } catch (error) {
            //422, "Missing input"
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Missing input")
                expect(error.statusCode).toEqual(422)
            } else {
                console.log(error)
            }
        }
    })
   
})

