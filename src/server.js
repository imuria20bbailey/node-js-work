const mongoose = require('mongoose')
//mongoose helps us to connect node js to mongo db
const express = require('express')
const router =require("./router/router")
const app=express()

//mongoose link
const url="mongodb+srv://ImuriaB:SIoJ1jC2mN8fOGmH@codequeen7.dkrndst.mongodb.net/test?retryWrites=true&w=majority"

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