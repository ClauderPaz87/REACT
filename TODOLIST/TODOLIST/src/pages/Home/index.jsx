import { useEffect, useReducer, useRef } from 'react'
import { v4 } from 'uuid';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'

import api from '../../services/api'
import Edit from '../../components/Edit'
import Add from '../../components/Add'
import Task from '../../components/Task'

const reducer = (state, action) => {
  switch (action.type) {

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    editTask: {}
  })

  return (

    <div className='container'>

      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center divHeader mt-4 w-75 rounded-2'>
          <h1>Todo-List</h1>
        </div>
      </div>

      <Task />
      
      <Add />

      <Edit />

    </div>

  )
}

export default App
