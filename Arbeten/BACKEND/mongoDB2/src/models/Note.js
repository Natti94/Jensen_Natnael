// FEEDBACK TILL DATABAS NÄR DET TEST T.EX. KÖRS MED POSTMAN // 


const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String }
}, { timestamps: true })

module.exports = mongoose.model('Note', NoteSchema)