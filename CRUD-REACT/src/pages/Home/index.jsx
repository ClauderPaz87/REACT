import { useReducer, useRef, useEffect } from 'react'

import Header from '../../components/Header';
import Table from '../../components/Table';
import Dialog from '../../components/Dialog';
import DialogEdit from '../../components/DialogEdit';
import api from '../../services/api';

import { v4 } from 'uuid';
import './style.css'


const Reducer = (state, action) => {
  switch (action.type) {
    case 'addUsers':
      return { ...state, users: [...state.users, { id: action.id, name: action.name, email: action.email, phone: action.phone, city: action.city }] }

    case 'deleteUsers':
      return { ...state, users: state.users.filter((user) => user.id !== action.id) }

    case 'editUsers':
      return {
        ...state, users: state.users.map((user) =>
          user.id === action.id ? {...user, name: action.name, email: action.email, phone: action.phone, city: action.city } : user)
      }

    case 'addNewUser':
      return { ...state, newUsers: action.user }

    case 'loadUsers':
      return { ...state, users: action.users.map(user => ({ id: user.id, name: user.name, email: user.email, phone: user.phone, city: user.city })) }
  }

}

function App() {
  const [state, dispatch] = useReducer(Reducer, {
    users: [],
    newUsers: {}
  })

  const dialog = useRef('')
  const dialogEdit = useRef('')

  const btnRegister = () => {
    dialog.current.showModal()
  }

  const getUsers = async () => {
    const userApi = await api.get('/users')
    dispatch({ type: 'loadUsers', users: userApi.data })
  }

  const createUsers = async (name, email, phone, city) => {
    api.post('/users', {
      name: name,
      email: email,
      phone: parseInt(phone),
      city: city
    })
    getUsers()
  }

  const editUsers = async (id, name, email, phone, city) => {
    await api.put(`/users/${id}`, {
      name: name,
      email: email,
      phone: parseFloat(phone),
      city: city
    });
    getUsers();
  }

  const deleteUsers = async (id) => {
    api.delete(`/users/${id}`)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (

    <div>

      <Header />

      <div className='container mt-4 rounded-2 shadow divSection'>

        <div className=''>
          <button type="button" onClick={btnRegister} class="btn btn-primary mt-4 ms-1">Cadastrar Clientes</button>
        </div>

        <div>
          <Table editUsers={editUsers} deleteUsers={deleteUsers} dialogEdit={dialogEdit} dispatch={dispatch} users={state.users} />
        </div>

        <dialog ref={dialog} className='position-absolute top-50 start-50 translate-middle w-75 h-50 border border-0 shadow' >
          <Dialog createUsers={createUsers} users={state.users} dispatch={dispatch} dialog={dialog} />
        </dialog>

        <dialog ref={dialogEdit} className='position-absolute top-50 start-50 translate-middle w-75 h-50 border border-0 shadow'>
          <DialogEdit editUsers={editUsers}t newUser={state.newUsers} dispatch={dispatch} dialogEdit={dialogEdit} />
        </dialog>

      </div>

    </div>


  )
}

export default App
