import Post from "./Post"

export interface IPostData{
    insertPost(post:Post):Promise<Post>
}
