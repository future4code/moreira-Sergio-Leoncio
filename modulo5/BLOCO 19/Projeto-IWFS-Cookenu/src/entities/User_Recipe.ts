export class User_Recipe {
    constructor(
      private user_id: string,
      private recipe_id: string,      
    ) {}
  
    public getUser_id(){
      return this.user_id
    }
    public getRecipe_id(){
        return this.recipe_id
    }
}