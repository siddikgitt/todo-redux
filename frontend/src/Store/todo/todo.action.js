import { TODO_ERROR, TODO_LOADING, TODO_SUCCESS } from "./todo.actionType"
import axios from 'axios'

//...................Post Todo to MongoDB..........................//
export const addTodo = (data) => async (dispatch) => {
    dispatch({ type: TODO_LOADING })
    try {
        await axios.post("http://localhost:8080/todo", {
            name: data.name,
            status: data.status
        }).then((res) => {
            console.log(res)
        })
    } catch (e) {
        dispatch({ type: TODO_ERROR })
    }
}

//....................Get data from mongoDB....................................//

export const getData = () => async (dispatch) => {
    dispatch({ type: TODO_LOADING })
    try {
        await axios.get("http://localhost:8080/todo").then((res) => {
            dispatch({ type: TODO_SUCCESS, payload: res.data })
        })
    } catch (e) {
        dispatch({ type: TODO_ERROR })
    }
}

//........................Update data in mongoDB................................//

export const updateData = (id, data) => async (dispatch) => {
    dispatch({ type: TODO_LOADING })
    try {
        await axios.put(`http://localhost:8080/todo/${id}`, {
            name: data.name,
            status: data.status
        }).then((res) => {
            getData()
            alert("data updated successfully😎")
        })

    } catch (e) {
        dispatch({ type: TODO_ERROR })
    }
}

//.....................Delete Data from mongoDB...........................//

export const deleteData = (id) =>async(dispatch) =>{
    dispatch({type:TODO_LOADING})
    try{
        await axios.delete(`http://localhost:8080/todo/${id}`).then((res)=>{
            getData()
            alert("Data Deleted successfully😎")
        })
    }catch(e){
        dispatch({type:TODO_ERROR})
    }
}