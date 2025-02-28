import { useEffect, useReducer, useRef} from 'react'
import { v4 } from 'uuid';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'


import api from '../../services/api'
import Edit from '../../components/Edit'
import Add from '../../components/Add'
import Task from '../../components/Task'

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTasks':
      return { ...state, tasks: [...state.tasks, { id: v4(), name: action.name, completed: false }] }

    case 'deleteTasks':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.id) }

    case 'completedTask':
      return { ...state, tasks: state.tasks.map((task) => task.id === action.id ? { ...task, completed: !action.completed } : task) }

    case 'editTasks':
      return { ...state, tasks: state.tasks.map((task) => task.id === action.id ? { ...task, name: action.name } : task) }

    case 'valueEditTask':
      return { ...state, editTask: action.task }

    case 'loadState':
      return { ...state, tasks: action.tasks.map(task => ({ id: task.id, name: task.task, completed: false })) };

  }
}

function App() {
  const dialog = useRef('')

  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    editTask: {}
  })

  async function getTasks() {
    const tasksFromApi = await api.get('/tasks')
    dispatch({ type: 'loadState', tasks: tasksFromApi.data })
    console.log(state.tasks)

  }

  async function createTask(name) {
    await api.post('/tasks', {
      tasks: name,
    });
    getTasks();

  }

  async function deleteTasks(id) {
    await api.delete(`/tasks/${id}`)
    
  }

  useEffect(() => {
    getTasks()
  }, [])


  return (

    <div className='container'>

      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center divHeader mt-4 w-75 rounded-2'>
          <h1>Todo-List</h1>
        </div>
      </div>

      {state.tasks.map((task) => (
        <Task deleteTasks={deleteTasks} key={task.id} dialog={dialog} dispatch={dispatch} tasks={task} />
      ))}

      <Add dispatch={dispatch} createTask={createTask} />

      <Edit dialog={dialog} dispatch={dispatch} edit={state.editTask} />

    </div>

  )
}

export default App
