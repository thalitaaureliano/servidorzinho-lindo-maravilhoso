const { connect } = require('./ComidasRepository')
const comidasModel = require('./ComidasSchema')
connect()

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    if(error){
      console.error(error)
    }
    return comidas 
  })
}

const getById = (id) => {
  return comidasModel.findById(
    id,
    (error, comida) => {
      return comida
    }
  )
}

const add = (comida) => {
  const novaComida = new comidasModel({
    nome: comida.nome,
    descricao: comida.descricao
  })
  novaComida.save()
}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().pratosFavoritos.filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })
  if(comidaCadastrada === undefined) {
    return false 
  }
  if(comida.nome !== undefined) {
  comidaCadastrada.nome = comida.nome
  }

  if(comida.descricao !== undefined) {
  comidaCadastrada.descricao = comida.descricao
  }
  return true
}


module.exports = {
  getAll,
  add,
  remove,
  update,
  getById
}