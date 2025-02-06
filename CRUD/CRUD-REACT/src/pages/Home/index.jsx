import { useState, useRef, useEffect } from 'react'
import Header from '../../components/Header';
import Table from '../../components/Table';
import Dialog from '../../components/Dialog';
import DialogEdit from '../../components/DialogEdit';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { v4 } from 'uuid';
import './style.css'

function App() {
  const dialog = useRef(0)
  const dialogEdit = useRef(0)
  const [users, setUsers] = useState([])
  const [newUsers,setNewUsers] = useState({})

  const btnRegister = () => {
    dialog.current.showModal()
  }

  const addUser = (name, email, phone, city) => {
    const newUser = [
      ...users,
      {
        id: v4(),
        name,
        email,
        phone,
        city,
      }
    ]

    setUsers(newUser)
  }

  const btnDelete = (id)=>{
    setUsers(users.filter(user => user.id !== id))
  }

  const addUserEdit = (user)=>{
    setNewUsers(user)
  }

  const editUser = (name, email, phone, city) => {
    setUsers(users.map(user => 
      user.id === newUsers.id ? { ...user, name, email, phone, city } : user
    ));
  };
  

  return (

    <div>

      <Header />

      <div className='container mt-4 rounded-2 shadow divSection'>

        <div className=''>
          <button type="button" onClick={btnRegister} class="btn btn-primary mt-4 ms-1">Cadastrar Clientes</button>
        </div>

        <div>

          <table class="table table-hover mt-4">
            <thead className='table-primary'>
              <tr>
                <th className='border-light border-0 border-end border border-3' scope="col">Nome</th>
                <th className='border-light border-0 border-end border border-3 w-25'>Email</th>
                <th className='border-light border-0 border-end border border-3' scope="col">Celular</th>
                <th className='border-light border-0 border-end border border-3' scope="col">Cidade</th>
                <th className='text-center border-0' scope="col">Ação</th>
              </tr>
            </thead>
            {users.map(user =>
              <Table key={user.id} 
              user={user} 
              exclused={btnDelete} 
              edit={dialogEdit}
              addUser={addUserEdit}
              />
            )}

          </table>

        </div>

        <dialog className='position-absolute top-50 start-50 translate-middle w-75 h-50 border border-0 shadow' ref={dialog}>
          <Dialog
            dialog={dialog}
            addUser={addUser}
          />
        </dialog>

        <dialog className='position-absolute top-50 start-50 translate-middle w-75 h-50 border border-0 shadow' ref={dialogEdit}>
            <DialogEdit dialogEdit={dialogEdit} addUser={addUserEdit} user={newUsers} editUser={editUser}/>
        </dialog>

      </div>

    </div>


  )
}

export default App
