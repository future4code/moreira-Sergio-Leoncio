import { connection } from "../data/connection";

export async function selectAllNames(nome: string): Promise<any> {
  const result = await connection.raw(`
       SELECT * FROM aula48_exercicio 
       WHERE name='${nome}';
    `);

  console.log(result[0]);
  return result[0];
};
