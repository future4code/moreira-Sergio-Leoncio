import { BaseDatabase } from "./BaseDatabase"
import products from "./products.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.connection

   .raw(`
      CREATE TABLE IF NOT EXISTS PRODUCTS (
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL         
      );
      CREATE TABLE IF NOT EXISTS PRODUCTS_TAGS (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL
      );      
      CREATE TABLE IF NOT EXISTS TAGS_PRODUCTS (
         products_id INT NOT NULL,
         tags_id INT NOT NUll,
         foreign key (products_id) references PRODUCTS(id),
         foreign key (tags_id) references PRODUCTS_TAGS(id)
      )
   `)
   // insertProducts = () => this.connection("PRODUCTS")
   // .insert(products)
   // .then(() => { console.log("Produtos criados")})
   // .catch(printError)  

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   closeConnection = () => { this.connection.destroy()}

}

const migrations = new CreateTables()

migrations.createTables()
//.then(migrations.insertProducts)
.finally(migrations.closeConnection)