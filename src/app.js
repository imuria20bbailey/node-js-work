// creating a local server

const express = require('express');
const port = 8080
const app = express();
//app.get("/", (req, res) => {
   // res.status(200).send({
      // "message": "welcome to server"
    //});
//})

app.listen(port, ()=> {
    console.log("listen on port" + port)
})
