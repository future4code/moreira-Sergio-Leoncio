import { IPostData } from "../model/interfacePostData"
import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export default class PostData extends BaseDatabase implements IPostData {
    protected TABLE_NAME = "labook_posts"

    insertPost = async (post: Post): Promise<Post> => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: post.id,
                    photo: post.photo ,
                    description: post.description,                                       
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
    
}