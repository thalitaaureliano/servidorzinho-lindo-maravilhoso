const batatas = require('./ComidasRepository')

const getAll = () => {
  return batatas.pratos
}

const add = (comida) => {
  comida.id = Math.random().toString(36).substr(-8)
  getAll().pratosFavoritos.push(comida)
}

const remove = (id) => {
  let comidasRestantes = getAll()

  getAll().pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida) => {
    return comida.id !== id
  })
}

module.exports = {
  getAll,
  add,
  remove
}