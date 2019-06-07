const { comidas } = require('./ComidasRepository')

const getAll = () => {
  return comidas.pratosFavoritos
}

const add = (comida) => {
  comida.id = Math.random().toString(36).substr(-8)
  getAll().push(comida)
  return comida
}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().filter((comida) => {
    return comida.id !== id
  })
}

module.exports = {
  getAll,
  add,
  remove
}