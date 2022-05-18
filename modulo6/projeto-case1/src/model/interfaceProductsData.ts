import Products from "./Products"
import Tags from "./Tags"

export interface IProductsData{
    search(id: string, name: string):Promise<Products>
    findByName(name: string):Promise<Products>
    insertProducts(prod:Products):Promise<Products>
    insertTags(tags:Tags):Promise<Tags>
    findByTags(name: string):Promise<Tags>
}
