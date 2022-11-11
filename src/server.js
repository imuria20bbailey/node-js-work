const mongoose = require('mongoose')
//mongoose helps us to connect node js to mongo db
const express = require('express')
const router =require("./router/router")
const app=express()
//used 
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//mongoose link
const url="mongodb+srv://ImuriaB:Dante@codequeen7.dkrndst.mongodb.net/test"
// app.listen (8000,()=>{
//     console.log(`server is running `)
// })

//creating the port to listen to port
const port = 8080;
app.get('/', (req, res) => {
    res.status(200).send({
       "message": "welcome to server"
    })
})
//connect to server to be able to use our router
app.use('/',router)




// app.post('/todos', (req, res) => {
//     res.status(200).send({
//        "message": "welcome to server"
//     })
// })

//connecting mongoose to database
mongoose.connect(url,() => {
    app.listen(port, () => {
        console.log(`server is running at port ${port}`)
    }) //link listens to mongoose database
}).catch(error=>console.log(error))  //run this incase of an error in the port