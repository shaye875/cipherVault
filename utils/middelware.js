import { isInformation } from "./validation.js"
import { selectOneByUserName, selectOneByPassword } from "../users/queries.js"

export function ifBudy(req, res, next) {
    if (req.body && typeof (req.body) === 'object') {
        next()
    }
    else {
        res.status(409)
        res.json({ "false": "missing body" })
    }
}

export async function ifLogin(req, res, next) {
    const haders = req.headers
    const ifInformation = isInformation(["username", "password"], haders)
    if (ifInformation === false) {
        res.status(404)
        return res.json({ "false": "missing username and password" })
    }
    const resultNmae = selectOneByUserName(haders.username)
    if (!(resultNmae)) {
        res.status(401)
        return res.json({ "false": "username not exist" })
    }
    const resultPassword = selectOneByPassword(haders.password)
    if (!(resultPassword)) {
        res.status(401)
        return res.json({ "false": "password not exist" })
    }
    next()
}
