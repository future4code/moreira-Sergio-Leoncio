import axios from 'axios'
import { Address } from '../types'

//https://viacep.com.br/ws/:cep/json/

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${zipcode}/json/`)
        const address: Address = {
            Estado: response.data.uf,
            Cidade: response.data.localidade,
            Bairro: response.data.bairro,
            Logradouro: response.data.logradouro,
            Cep: response.data.cep,
            Complemnento: response.data.complemento,
            Numero: response.data.complento
        }

        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}