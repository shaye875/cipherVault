import { connection } from "../data/masseges.js"

export async function insertMassege(massege) {
    const result = await connection.query(`
        insert into messages(username,cipher_type, encrypted_text,inserted_at)
        values('${massege.username}','${massege.cipher_type}','${massege.encrypted_text}','${massege.inserted_at}')
`)
return result
}

export async function selectCountAll(){
    const result = await connection.query(`
        select count(*) from messages
        `)
        return result[0]
}

export async function selectById(id){
    const result = await connection.query(`
        select * from messages where id = ${id}
        `)
        return result[0]
}