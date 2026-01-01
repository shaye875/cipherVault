import { ifLogin,ifBudy } from '../utils/middelware.js'
import { checkWriteMassege } from './postMassege.js'
import { isInformation } from '../utils/validation.js'
import { selectById } from './queriesMysql.js'

import express from 'express'

export const messages = express()

messages.post("/encrypt",ifLogin,ifBudy,async(req,res)=>{
    const haders = req.headers
    const body = req.body
    const result = await checkWriteMassege(haders,body)
    for(let key in result){
        if(key === "false"){
            res.status(400)
            return res.json(result)
        }
    }
    res.status(201)
    res.json(result)
})

messages.post("/decrypt",ifLogin,ifBudy,async(req,res)=>{
    const body = req.body
    const ifInformation = isInformation(["messageId"],body)
    if(ifInformation === false){
        res.status(404)
        return res.json({"false":"missing information"})
    }
    const result = await selectById(Number(body.messageId))
    if(result[0]){
    const decrypt = result[0].encrypted_text.split('').reverse().join('').toLowerCase()
    res.json({"id":body.messageId,"decryptedText":decrypt})
    }else{
        res.status(404)
        res.json({"false":"not found"})
    }
})