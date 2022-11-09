const mongoose = require('mongoose')
const { stringify } = require('querystring')
const schema=mongoose.Schema
//mongoose helps to connect mongodb to node js

//creating schema
const todoSchema = new schema({
    firstname:{
        type:string,
        required:true
    },
    lastname:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    }
})



const Todo = mongoose.model("model", todoSchema)
module.exports = Todo;
