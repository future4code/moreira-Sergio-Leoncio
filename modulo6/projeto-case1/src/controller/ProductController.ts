import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { SearchInputDTO } from "../types/SearchInputDto";
import { SignupInputDTO } from "../types/signupInputDTO";


export class ProductContoller {

    constructor(private productBusiness: ProductBusiness){}

  public async create(req: Request, res: Response) {
    try {
      const { id, name, tags } = req.body;

      const input: SignupInputDTO = {
        id,
        name,
        tags,
      };
      await this.productBusiness.create(input);

      res.status(201).send({ message: "Produto cadastrado com sucesso!" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no cadastro");
    }
  };

  public async search(req: Request, res: Response) {
    try {
      let message = "Sucess";

      const input: SearchInputDTO = {
        id: Number(req.params.id),
      };

      const prod = await this.productBusiness.search(input);
      res.status(200).send({ message, prod });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no search");
    }
  };
}
