
const express = require('express')
const app = express()

app.get('/', (req, res)=> res.status(200).send('Hello World'))
app.get('/users', (req, res)=>res.status(200).json([]))
app.get('/users/:id', (req, res)=> res.status(200).json({ sucess: true, message:'usuário encontrado', user:{name: req.params.id}}))
app.post('/users/:id', (req, res)=> res.status(200).json({}))
app.delete('/users/:id', (req, res)=> res.status(200).json({}))

app.listen(8000, () => console.log('Server is running'))
