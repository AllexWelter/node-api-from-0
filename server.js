/*  Criar nossa API de usuários
    -Criar um usuário   
    -Listar todos os usuários
    -Editar um usuário
    -Deletar um usuário
*/

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) =>{
    
    prisma.user

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)  
})

app.listen(3000)