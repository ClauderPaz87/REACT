import { useReducer, useRef } from 'react'

import Form from '../../components/form';
import Table from '../../components/Table';
import Dialog from '../../components/Dialog';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { v4 } from 'uuid';
import './style.css'

const reducer = (state,action)=>{
  switch(action.type){
    case 'addValues':
      return {...state, users: [...state.users, {id:action.id, name:action.name, email:action.email, phone:action.phone}]}
    
    case 'deleteUser':
      return {...state, users: state.users.filter((user)=> user.id !== action.id)}

    case 'editUsers':
      return {...state, users: state.users.map((user) => 
        user.id === action.id ? {id:action.id , name:action.name , email:action.email , phone:action.phone} : user)}
    
    case 'addEditValues':
      return {...state, usersEdit: action.userEd}
    
  }    
}

function App() {

  const dialog = useRef('')

  const [state,dispatch] = useReducer(reducer,{
    users: [],
    usersEdit : {}
  })

  return (

    <div className='container'>

      <div className='d-flex justify-content-center mt-3'>
        <p className='fs-3 fw-bolder'>Usuários</p>
      </div>

      <div className='d-flex justify-content-center'>
        <Form dispatch={dispatch}/>
      </div>

      <div className='d-flex justify-content-center'>
          <Table dialog={dialog} dispatch={dispatch} user={state.users}/>
      </div>

      <dialog ref={dialog} className='position-absolute top-50 start-50 translate-middle w-50 h-50 border-0 shadow rounded-2'>
        <Dialog usersEdit={state.usersEdit} dispatch={dispatch} dialog={dialog} />
      </dialog>

    </div>

  )

}

export default App
