import express from 'express'
import { ifBudy } from '../utils/middelware.js'
import { checkWrite } from './postUser.js'

export const registerUser = express()

registerUser.post("/",ifBudy,async(req,res)=>{
    const body = req.body
    const result = await checkWrite(body)
    for(let key in result){
        if(key === "false"){
            res.status(400)
            return res.json(result)
        }else{
            return res.json(result)
        }
    }
})