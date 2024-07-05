
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import color from 'colors';

console.log(color.blue(`MANAGER-COLAB-BACKEND PROJECT `)+color.yellow('START!✅'))

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(color.bgGreen(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`))
})
