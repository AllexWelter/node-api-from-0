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

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            address: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.get('/usuarios', async (req, res) => {
    
    const users = await prisma.user.findMany()
    
    res.status(200).json(users)
})

app.listen(3000)