import { isInformation,isTypes } from "../utils/validation.js"
import { insertMassege,selectCountAll } from "./queriesMysql.js"
import { updateByUserName } from "../users/queries.js"

async function checkValid(massege){
   const keys = ["message","cipher_type"]
   const ifInformation = isInformation(keys,massege)
   if(ifInformation === false){
    return {"false":"missing information"}
   }
   const objTypes = {"message":"","cipher_type":""}
   const ifTypes = isTypes(objTypes,massege)
   if(ifTypes === false){
    return {"false":"one or more of types is wrong"}
   }
}

export async function checkWriteMassege(haders,massege){
    const ifValid = await checkValid(massege)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    console.log(massege.cipher_type);
    
    let revers = massege.message.split("").reverse().join('')
    const tuUpper = revers.toUpperCase()
    await insertMassege({
        username:haders.username,
        cipher_type:massege.cipher_type,
        encrypted_text:tuUpper,
        inserted_at:String(new Date())
    })
    await updateByUserName(haders.username)
    const id = await selectCountAll()
    return {"id":id,"cipherType":massege.cipher_type,"encryptedText":tuUpper}
}