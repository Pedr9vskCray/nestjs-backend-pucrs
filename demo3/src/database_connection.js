import mysql2 from "mysql2/promise"
import credentials from "../credentials.json" with { type: "json"}

export async function query({query, values = []}){
    const connection = await mysql2.createConnection({
        "host": credentials.host,
        "port": credentials.port,
        "database": credentials.database,
        "user": credentials.user,
        "password": credentials.password
    });

    console.log("connecting to: " + credentials.host + ":" + credentials.port)

    try {
        const [results] = await connection.execute(query, values);
        connection.end()
        return results;
    } catch (error){
        throw new Error(error.message)
    }
}