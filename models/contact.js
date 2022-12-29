const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName : String,
    secondName : String,
    nickName : String,
    phoneNumber : String,
    photoUrl : String
})

const Contact = mongoose.model('contact' , contactSchema)

module.exports = Contact