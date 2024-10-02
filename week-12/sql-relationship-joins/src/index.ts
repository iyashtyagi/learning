import pg from 'pg';
import { config }from 'dotenv';

const { Client } = pg;

config();

const client  = new Client({connectionString : process.env.DB_STRING});
try {
    await client.connect();
    console.log("connected");
} catch (error) {
    console.log(error);
}


async function userTable(){
    const query = `CREATE TABLE users2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
    try {
        const result = await client.query(query);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

interface UserData {
    username : string,
    email : string,
    password : string
}

async function logUserTable(){
    const query = `SELECT * FROM users2`;
    const result = await client.query(query);
    console.log(result.rows);
}

async function logAddressTable(){
    const query = `SELECT * FROM users2`;
    const result = await client.query(query);
    console.log(result.rows);
}

async function insertUserData(params:UserData) {
    const query = `INSERT INTO users2 (username, email, password) VALUES ($1, $2, $3)`;
    const values = [params.username, params.email, params.password];
    try {
        const result = await client.query(query,values);
        await logUserTable();
    } catch (error) {
        console.log(error);
    }
}

async function createForeignTable() {
    const query = `CREATE TABLE address2(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        country VARCHAR(100) NOT NULL,
        pincode VARCHAR(30) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
    )`
    try{
        const result = await client.query(query);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

async function insertIntoAddress(userAddressData:AddressData) {
   const query = `INSERT INTO address2 (user_id, city, street, country, pincode) VALUES ($1, $2, $3, $4, $5)`;
   const values = [userAddressData.user_id, userAddressData.city, userAddressData.street, userAddressData.country, userAddressData.pincode];
   try{
       const result = await client.query(query,values);
       await logUserTable();
       await logAddressTable();
    }
    catch (error) {
        console.log(error);
    } 
}


// transactions

async function insertDataWithTransactions(userData:UserData, userAddressData:userAddressDataExcluded){
    const userInfoQuery = `INSERT INTO users2(username, email, password) VALUES ($1, $2, $3) RETURNING id`; 
    const addressQuery = `INSERT INTO address2(user_id, city, street, country, pincode) VALUES ($1, $2, $3, $4, $5)`; 
    const userValue = [userData.username, userData.email, userData.password];
    client.query('BEGIN');
    try {
        const res = (await client.query(userInfoQuery,userValue)).rows[0].id;
        const addressValue = [res, userAddressData.city, userAddressData.street, userAddressData.country, userAddressData.pincode];
        await client.query(addressQuery, addressValue);
    } catch (error) {
        console.log(error);
        client.query('ROLLBACK');
    }
    client.query('COMMIT');
} 
type AddressData = {
    user_id : number,
    city : string,
    street : string,
    country : string,
    pincode : number
}

type userAddressDataExcluded = Omit<AddressData, "user_id">
const userAddressData:userAddressDataExcluded = { 
    city : "Panipat",
    street : "1232 ABC",
    country : "India",
    pincode : 1231112342 
}

const userData:UserData = {
    username : "mohit",
    email : "mohit@gmail.com",
    password: "234rfnd"
}

// without join - 2 queries to get all the details of the users and their address 
// await logUserTable();
// await logAddressTable();

// with join/innerJoin - return all the matched items and existed in both table
async function joinOrInnerJoin(){
    const query = `SELECT u.id, u.username, u.email, u.password, a.city, a.street, a.country, a.pincode FROM users2 u 
        JOIN address2 a ON u.id = a.user_id`;
    try{
        const res = await client.query(query);
        console.log(res.rows);
        console.log("----------------------------------------------");
    }
    catch(error){
        console.log(error);
    }
}

// with leftJoin - return all the items from the left table + matched one
async function leftJoin(){
    const query = `SELECT u.id, u.username, u.email, u.password, a.city, a.street, a.country, a.pincode FROM users2 u 
        LEFT JOIN address2 a ON u.id = a.user_id`;
    try{
        const res = await client.query(query);
        console.log(res.rows);
        console.log("----------------------------------------------");
    }
    catch(error){
        console.log(error);
    }
}

// with rightJoin - return all the items from the right table + matched one
async function rightJoin(){
    const query = `SELECT u.id, u.username, u.email, u.password, a.city, a.street, a.country, a.pincode FROM users2 u 
        RIGHT JOIN address2 a ON u.id = a.user_id`;
    try{
        const res = await client.query(query);
        console.log(res.rows);
        console.log("----------------------------------------------");
    }
    catch(error){
        console.log(error);
    }
}

// with fullJoin - mitxure of left and right join
async function fullJoin(){
    const query = `SELECT u.id, u.username, u.email, u.password, a.city, a.street, a.country, a.pincode FROM users2 u 
        FULL JOIN address2 a ON u.id = a.user_id`;
    try{
        const res = await client.query(query);
        console.log(res.rows);
        console.log("----------------------------------------------");
    }
    catch(error){
        console.log(error);
    }
}

await joinOrInnerJoin();
await leftJoin();
await rightJoin();
await fullJoin();

await client.end();