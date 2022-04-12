import axios from 'axios';
import { baseURL } from './baseURL';

//letra a) diferança é que o arrow function tem o const. 

//letra b) 
 const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/news`);
    return response.data;
    
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


