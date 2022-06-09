import { ProductDatabase } from "../data/ProductDatabase";
import { SignupInputDTO } from "../types/signupInputDTO";
import products from "../data/products.json";
import { Products } from "../model/Products";
import { SearchInputDTO } from "../types/SearchInputDto";

const productDatabase = new ProductDatabase();

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase
    ){}

  public async create(input: SignupInputDTO): Promise<void> {
    const { id, name, tags } = input;

    const registeredProduct = await this.productDatabase.findById(id);
    if (registeredProduct) {
      throw new Error("Produto já cadastrado");
    }

    for (let i = 0; i < products.products.length; i++) {
      await this.productDatabase.create(products.products[i]);
    }
  };

  public async search(input: SearchInputDTO): Promise<Products> {
    const prod: Products = await new ProductDatabase().search(input.id);

    if (!input) {
      throw new Error("Params must be sent");
    }
    if (!prod) {
      throw new Error("Product not found");
    }

    return prod;
  };
}
