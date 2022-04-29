import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  
  public async createRecipe(recipe: Recipe){
    try{
      await BaseDatabase.connection("Cookenu_recipe").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        date: recipe.getDate()                
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getRecipe(id: string): Promise<Recipe>{
    try{
      const recipe:any = await BaseDatabase
      .connection('Cookenu_recipe')
      .select('id', 'title', 'description', 'date')
      .where('id', id)
      return recipe

    } catch (error: any){
      throw new Error(error.sqlMessage || error.message);
    } 
  }  
}