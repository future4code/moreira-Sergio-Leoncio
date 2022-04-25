import axios from 'axios';
import { baseURL } from './baseURL';

//letra a) POST

//letra b)
type user = {
	id: string;
	name: string;
	email: string;
}

const postNews = async (): Promise<void> => {
    const response = await axios.put(`${baseURL}/news`, {
        "title": "Estou apredendo backend2",
	    "content": "Estou gostando, mas o frontend e mais emocionante!2",
	    "date": 1589818936000
    })         
              
    
  };

  const main = async (): Promise<void> => {
    try {        
        const newPost = await postNews()
        //console.log(newPost)
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
}
main()
