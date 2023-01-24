const mongoose  = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
    fullName: { type: String, required: true },
    username : {type : String , required: true},
    age : {type : Number , required: true},
    iconSource : {type : String, required: true }
})


module.exports = mongoose.model('users', userSchema)