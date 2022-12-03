const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    status:{type:Boolean,required:true}
})
const todoModel = mongoose.model("todo",todoSchema)
module.exports = todoModel