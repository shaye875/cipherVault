import express from 'express'
import { ifLogin } from '../utils/middelware.js'
import { selectOneByUserName } from '../users/queries.js'

export const getmasseges = express()

getmasseges.get("/",ifLogin,async(req,res)=>{
    const {username} = req.headers
    const user = await selectOneByUserName(username)
    if(user){
        res.json({"username":username,"encryptedMessagesCount":user.encryptedMessagesCount})
    }else{
        res.status(400)
        res.json({"false":"not found"})
    }
})