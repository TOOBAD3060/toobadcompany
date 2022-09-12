const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    fullName : String,
    email : String,
    message: String
})

const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact;