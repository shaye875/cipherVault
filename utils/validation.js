export function isInformation(keys,obj){
    let count = 0
    for(let key in obj){
        for(let keyKeys of keys){
            if(String(key).toLowerCase() === String(keyKeys).toLowerCase()){
                count+=1
                if(key !== keyKeys){
                    obj[keyKeys] = obj[key]
                    delete obj[key]
                }
            }
        }
    }
    if(count === keys.length){
        return true
    }
    return false
}

export function isTypes(objKeysTypes,obj){
    let count = 0
    for(let key in obj){
        if(typeof(obj[key]) === typeof(objKeysTypes[key])){
            count+=1
        }
    }
    if(count === Object.keys(objKeysTypes).length){
        return true
    }
    return false
}


