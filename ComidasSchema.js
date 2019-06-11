const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    nomes: { type: String, required: true},
    descricao: { type: String }
})

const comidasModel = mongoose.model("comidas", ComidasSchema);

module.exports = comidasModel; 