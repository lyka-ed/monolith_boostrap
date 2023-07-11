const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = mongoose.connect('mongodb+srv://lykaokpos:admin@nodeb.jnhhtwz.mongodb.net/node-blog')
        console.log("Connection to DBS successful.")
    } catch(error){
        console.log(error)
    }
}

module.exports = connectDB