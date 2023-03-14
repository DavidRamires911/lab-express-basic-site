const express = require("express")
const server = express()
server.get ("/",(request,response,next)=>{
    request.sendFile(__dirname + "/v" )
})
server.listen(3000, ()=>{
    console.log("server is running")
})
