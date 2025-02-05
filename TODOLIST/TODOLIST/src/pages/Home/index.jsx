import { useEffect, useState, useRef } from 'react'
import { v4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import api from '../../services/api'

function App() {
  const inputTask = useRef(null)
  const inputEdit = useRef(null)
  const dialog = useRef(null)
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState([])

  async function getTask(){
    const taskFromApi =  await api.get('/users')
    setTask(taskFromApi.data)
    console.log(task)
  }

  async function createTask(){
    await api.post('/users', {
      name: inputTask.current.value
    })
    getTask()
  }

  useEffect(()=>{
    getTask()
  },[])

  const btnAddTaskKey = (event)=>{
    if(event.key === 'Enter'){
      const newItem = {
        id: v4(),
        value: inputTask.current.value,
        checked: false
      }
  
      setTask([...task, newItem])
      inputTask.current.value = ''
    }
  }

  const btnAddTask = () => {
    const newItem = {
      id: v4(),
      value: inputTask.current.value,
      checked: false
    }

    setTask([...task, newItem])
    inputTask.current.value = ''
    
  }

  const btnCheck = (id) => {
    setTask(task.map(p =>
      p.id === id ? { ...p, checked: !p.checked } : p
    ))
  }

  const btnDelete = (id) => {
    setTask(task.filter((p) =>
      p.id !== id
    ))
  }

  const btnEdit = (task) => {
    setNewTask(task)
    dialog.current.showModal()
  }

  const btnSave = () => {
    console.log(newTask.id)
    setTask(task.map(p =>
      p.id === newTask.id ? { ...p, value: inputEdit.current.value } : p
    ))

    dialog.current.close()
  }

  const btnCancel = () => {
    dialog.current.close()
  }

  return (

    <div className='container'>

      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center divHeader mt-4 w-75 rounded-2'>
          <h1>Todo-List</h1>
        </div>
      </div>

      {task.map((p) => (
        <div className='d-flex justify-content-center'>
          <div className='row mt-5 divTask shadow w-75 rounded-2 p-1' key={p.id}>

            <div className='col-2 p-2 d-flex align-items-center'>
              <input className='w-25 inputCheckbox' onChange={() => btnCheck(p.id)} checked={p.checked} type="checkbox" />
            </div>

            <div className='col-8 d-flex align-items-center'>
              <p className={`mb-0 fw-bolder fs-5 ${p.checked ? 'text-decoration-line-through' : ''}`}>{p.value}</p>
            </div>

            <div className='col-1 d-flex align-items-center'>
              <button className='w-50' onClick={() => btnEdit(p, p.id)} type='button'>E</button>
            </div>

            <div className='col-1 d-flex align-items-center'>
              <button className='w-50' onClick={() => btnDelete(p.id)} type='button'>X</button>
            </div>

          </div>
        </div>
      ))}

      <div class="input-group row d-flex justify-content-center mt-5">
        <div className='col-8 ms-5'>
          <input type="text" class="form-control ms-4 inputTask" onKeyDown={btnAddTaskKey} ref={inputTask} placeholder="Adicione uma tarefa" aria-describedby="button-addon2" />
        </div>
        <div className='col-2'>
          <button class="btn btn-outline-secondary ms-4 btnAdd" onClick={btnAddTask} type="button" id="button-addon2">Adicionar</button>
        </div>
      </div>

      <dialog ref={dialog} className='position-absolute top-50 start-50 translate-middle w-50 h-50'>
        <div>
          <h1 className='text-center'>Editar Tarefa</h1>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <input className='p-1 w-50' ref={inputEdit} placeholder='edite sua tarefa' type="text" />
        </div>
        <div className='row w-75 mt-3'>
          <div className='col-3'>
            <button type="button" onClick={btnSave} class="btn btn-success">Salvar</button>
          </div>
          <div className='col-4'>
            <button type="button" onClick={btnCancel} class="btn btn-danger">Cancelar</button>
          </div>

        </div>
      </dialog>

    </div>

  )
}

export default App
