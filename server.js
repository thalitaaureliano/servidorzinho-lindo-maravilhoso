const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get("/comidas", (request, response) => {
  response.send(controller.getAll())
})

servidor.post('/comidas', (request, response) => {
  controller.add(request.body)
})

servidor.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})

servidor.listen(3000)
console.log("servidorzinho rodando na porta 3000")
