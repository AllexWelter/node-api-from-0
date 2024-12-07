/*  Criar nossa API de usuários
    -Criar um usuário   
    -Listar todos os usuários
    -Editar um usuário
    -Deletar um usuário
*/

import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res) =>{
    
    console.log(req)

    res.send('Ok, POST')

})

app.get('/usuarios', (req, res) => {
    res.send('OK, deu bom')    
})

app.listen(3000)