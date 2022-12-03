const express = require("express")
const cors = require("cors")
const connect = require("../connector/connect")
const todoRouter = require("../controller/todo.controller")
require('dotenv').config()
const PORT = process.env.PORT || 8080
const server = express()
server.use(express.json())
server.use(cors())
server.get("/", async (req, res) => {
    res.send("Hello welcome to the server")
})
server.use("/todo",todoRouter)

server.listen(PORT, async () => {
    await connect()
    console.log("server started at port 8080")
})