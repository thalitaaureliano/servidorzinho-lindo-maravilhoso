const { comidas } = require('./ComidasRepository')

const getAll = () => {
  return comidas
}

const getById = (id) => {
  let comidaCadastrada = getAll().pratosFavoritos.find((comida) => {
    return comida.id === id
  })
  return comidaCadastrada
}

const add = (comida) => {
  comida.id = Math.random().toString(36).substr(-8)
  getAll().push(comida)
  return comida
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