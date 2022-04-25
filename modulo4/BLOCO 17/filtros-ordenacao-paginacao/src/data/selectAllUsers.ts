import { connection } from "../data/connection"

export  async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, password
       FROM aula49_users;
    `)
 
    return result[0]
 }