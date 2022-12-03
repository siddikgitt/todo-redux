const express = require("express")
const todoModel = require("../module/todo.module")
const todoRouter = express.Router()

todoRouter.get("/", async (req, res) => {
    try {
        const todo = await todoModel.find()
        res.status(200).send(todo)
    } catch (e) {
        res.status(500).send("Internal server error")
    }

})
todoRouter.post("/", async (req, res) => {
    const { name, status } = req.body
    try {
        const todo = await todoModel.create({ name: name, status: status })
        res.status(200).send({
            message: "data created suceessfully",
            data: todo
        })
    } catch (e) {
        res.status(500).send("Internal server error")
    }
})

todoRouter.put("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const todo  = await todoModel.findByIdAndUpdate({_id:id},req.body,{
            new:true
        })
        res.status(200).send({
            message:"Your data updated successfully",
            data:todo
        })

    }catch(e){
        res.status(500).send("Internal server error")
    }
})

todoRouter.delete("/:id", async (req, res) => {
    const { id } = req.params
    try{
        await todoModel.deleteOne({_id:id})
        res.status(200).send({
            message:"data deleted successfully"
        })

    }catch(e){
        res.status(500).send("Internal server error")
    }
})

module.exports = todoRouter