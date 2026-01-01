import mysql2 from 'mysql2/promise'

export const connection = await mysql2.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "messages",
    pool: 3306,
})

console.log("db run")

await connection.query(`
    create table if not exists messages(
    id int primary key auto_increment,
    username varchar(50),
    cipher_type varchar(50),
    encrypted_text varchar(50),
    inserted_at text
    )
    `)
