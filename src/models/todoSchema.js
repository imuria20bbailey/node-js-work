//creating a schema
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const todoSchema = new schema({
   activity:{
     type:String,
     required:true
   },

   isCompleted:{
    type:Boolean, //this stands for both activity being true or false
    required:true,
    default:false
  }
})
//exporting the file todoSchema
const Todo= mongoose.model("todoSchema", todoSchema)
module.exports= Todo;