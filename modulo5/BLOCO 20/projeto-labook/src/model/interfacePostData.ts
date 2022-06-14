import Post from "./Post"

export interface IPostData{
    getPost(id: string):Promise<Post>
    insertPost(post:Post):Promise<Post>
}
