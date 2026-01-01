import { getColllectionUsers } from "../data/users.js"

const collectionUsers = await getColllectionUsers()

export async function insertOne(user){
   const result = await collectionUsers.insertOne(user)
   return result
}

export async function selectOneByUserName(value){
    const result = await collectionUsers.findOne({"username":value})
    return result
}

export async function selectOneByPassword(value){
    const result = await collectionUsers.findOne({"password":value})
    return result
}

export async function updateByUserName(username){
    const result = await collectionUsers.updateOne({"username":username},{$inc:{"encryptedMessagesCount":1}})
    return result
}