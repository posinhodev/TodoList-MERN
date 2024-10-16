import { createPool } from "mysql2";

export const pool  = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Posinhodev',
    database: 'tododb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();