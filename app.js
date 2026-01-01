import express from 'express'
import { registerUser } from './users/roeter.postUser.js'
import { messages } from './masseges/router.messes.js'
import { getmasseges } from './masseges/getByUsers.js'

const app = express()

app.use(express.json())

app.use("/api/auth/register",registerUser)

app.use("/api/messages",messages)

app.use("/api/users/me",getmasseges)

app.listen(3000,()=>{
   console.log("server run")
})