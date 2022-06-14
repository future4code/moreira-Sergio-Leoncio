import { IPostData } from "../model/interfacePostData"
import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export default class PostData extends BaseDatabase implements IPostData {
    protected TABLE_NAME = "labook_posts"

    insertPost = async (post: Post): Promise<Post> => {
        try {
            console.log(post)
            await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: post.id,
                    photo: post.photo ,
                    description: post.description,
                    type: post.type,                                       
                    created_date: post.created_date,
                    author_id: post.author_id                    
                })
            
                return post
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
    getPost = async (id: string): Promise<Post> => {
        try{
            const post: any = await this
                .connection(this.TABLE_NAME)
                .select('id', 'photo', 'description', 'date')
                .where('id', id)
                return post 

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}