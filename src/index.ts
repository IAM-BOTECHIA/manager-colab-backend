
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import color from 'colors';

console.log(color.blue('BACKEND-1-PROJECT RUNNING'));                           // outputs green text

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`)
})
