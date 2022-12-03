import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import { addTodo, deleteData, getData, updateData } from './Store/todo/todo.action'
const intialState = {
  name: "",
  status: false
}

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(intialState)
  const dispatch = useDispatch()
  const details = useSelector((store) => store.Todo)
  useEffect(() => {
    let isMounted = true
    isMounted && dispatch(getData())
    return () => {
      isMounted = false
    }
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = () => {
    if (data.name == "") {
      alert("Please add your todo before proceed")
    } else {
      dispatch(addTodo(data))
      dispatch(getData())
      setData(intialState)
    }
  }

  const handleUpdate = (id, el) => {
    const newData = {
      ...el,
      name: el.name,
      status: !el.status
    }
    dispatch(updateData(id, newData))
    dispatch(getData())

  }

  const handleDelete = (id) => {
    dispatch(deleteData(id))
    dispatch(getData())
  }

  return (
    <div className="App">
      <h1>Hello Welcome to my World</h1>
      <input type="text" placeholder='enter your todo name' name='name' value={data.name} onChange={handleChange} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {
          details.data?.map((el) => (
            <div>
              <h1>{el.name}</h1>
              <h3>{el.status ? "Done" : "Pending"}</h3>
              <button onClick={() => handleUpdate(el._id, el)}>{el.status ? "Make as pending" : "make as completed"}</button>
              <button onClick={() => handleDelete(el._id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
