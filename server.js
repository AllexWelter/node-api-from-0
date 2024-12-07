/*  Criar nossa API de usuários
    -Criar um usuário   
    -Listar todos os usuários
    -Editar um usuário
    -Deletar um usuário
*/

import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) =>{
    
    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)  
})

app.listen(3000)