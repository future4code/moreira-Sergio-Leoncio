import { BaseDatabase } from "./BaseDatabase";


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
  createTables = () => this.connection.raw(`
    
  CREATE TABLE IF NOT EXISTS DOGHERO (
    id VARCHAR(255) PRIMARY KEY,
    status ENUM("A FAZER", "ANDAMENTO", "FEITO") DEFAULT "A FAZER",
    date_schedule DATE NOT NULL,
    price FLOAT NOT NULL,
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    duration ENUM("30", "60") NOT NULL,
    date_start timestamp NOT NULL,
    date_end timestamp NOT NULL    
  );
  CREATE TABLE IF NOT EXISTS PETS (
    id  VARCHAR(255) PRIMARY KEY,
    name_pets VARCHAR(255) NOT NULL,
    DOGHERO_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (DOGHERO_id) REFERENCES DOGHERO(id)
  )  
`)
    .then(() => { console.log("Table create") })
    .catch(printError)
    closeConnection = () => { this.connection.destroy() }
}
const migrations = new CreateTables()
  migrations.createTables()
    .finally(migrations.closeConnection) 