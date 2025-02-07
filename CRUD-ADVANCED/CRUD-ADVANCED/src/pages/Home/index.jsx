import { useState, useRef } from 'react'
import Form from '../../components/form';
import Table from '../../components/Table';
import Dialog from '../../components/Dialog';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { v4 } from 'uuid';
import './style.css'

function App() {
  const [users, setUsers] = useState([])
  const [newUser,setNewUsers] = useState({})
  const dialog = useRef('')

  const addUser = (name, email, phone) => {
    const user = [
      ...users,
      {
        id: v4(),
        name,
        email,
        phone
      }
    ]

    setUsers(user)
  }

  const addNewUser = (user)=>{
    setNewUsers(user)
  }

  const editUser = (name,email,phone)=>{
    setUsers(users.map(user =>
      user.id === newUser.id ? {name,email,phone} : user
    ))
  }

  return (

    <div className='container'>

      <div className='d-flex justify-content-center mt-3'>
        <p className='fs-3 fw-bolder'>Usuários</p>
      </div>

      <div className='d-flex justify-content-center'>
        <Form addUser={addUser}/>
      </div>

      <div className='d-flex justify-content-center'>
        <Table addNewUser={addNewUser} users={users} setUsers={setUsers} dialog={dialog} />
      </div>

      <dialog className='position-absolute top-50 start-50 translate-middle w-50 h-50 border-0 shadow rounded-2' ref={dialog}>
        <Dialog  dialog={dialog} editUser={editUser} newUser={newUser} />
      </dialog>

    </div>

  )

}

export default App
