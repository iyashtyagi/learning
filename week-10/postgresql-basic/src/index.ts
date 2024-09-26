import { Client } from "pg"
import dotenv from "dotenv"

dotenv.config();

const client = new Client({
    connectionString : process.env.DB_STRING
})

client.connect();

async function createTable(){
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

    console.log(result);

}

async function insertData() {
    try{
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ('yash2', 'yash2@gmail.com', 'testing')`;
        const res = await client.query(insertQuery);
        console.log(`Insertion success: ${JSON.stringify(res)}`);
    }
    catch(err){
        console.error(`Something went wrong: ${err}`);
    }
    await client.end(); 
}

async function getUser(email:string){
    try{
        const query = `SELECT * FROM users WHERE email = $1`;
        const values = [email];
        const result = await client.query(query, values);
        if(result.rows.length > 0){
            console.log('User found: ',result.rows[0]);
            return result.rows[0];
        }
        else{
            console.log("No user found");
            return null;
        }
    }
    catch(err){
        console.error(err);
        return null;
    }
}

getUser("yash2@gmail.com");