
const express= require('express')

const todoSchema = require('../models/todoSchema')
const router = express.Router();

router.post("/todos", async(req,res) => {
    // console.log("posting my todoes")
    const todo = req.body
    const todoData =new todoSchema(todo)
    try{
        await todoData.save()
        return res.status(200).send(todoData)
    }catch (error) {
        res.status(401).send(error)
    }
})

//fetching all the  todos
router.get("/todos", async(req, res)=> {
 todoSchema.find({}).then((todos)=> {
return res.status(200).send(todos)
 }).catch((error)=>{
    res.status(400).send(error)
 })
})






module.exports = router;