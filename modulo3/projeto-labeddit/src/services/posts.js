import axios from "axios"
import { BASE_URL } from "../constant/urls"




export const CreatePost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {        
        clear()
        alert(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
  }
  
  export const CreateComment = (body, clear) => {
    axios.post(`${BASE_URL}/posts/:id/comments`, body,{
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {        
        clear()
        alert(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
  }
  