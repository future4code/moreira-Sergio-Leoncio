import axios from 'axios';
import { baseURL } from './baseURL';

//letra a) não

//letra b) Para retornar o que foi solicitado.


type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/news`);
    return response.data.map((item: any) => {
        return {
            id: item.id,
            name: item.name,
            email: item.email
        }
    })
    
  };

  const main = async (): Promise<void> => {
    try {        
        const subscribers = await getSubscribers()
        console.log(subscribers)
    } catch (error: any) {
        console.log(error.response?.data || error.message)
    }
}
main()

