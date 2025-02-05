import { useEffect, useState, useRef } from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api'


// react hook - useRef

function Home() {
const [users, setUsers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

    async function getUsers(){
     const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
    
    }

    async function createdUsers(){
       await api.post('/users', {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value

       })
       
       getUsers()
      
     }

     async function deleteUsers(id){
      await api.delete(`/users/${id}`)
      
      getUsers()
     }

    useEffect(()=> {
      getUsers()
    },[])

    
  
  return (

      <div id='root'>

        <div class='d-flex justify-content-center d-flex align-items-center'>
          <div class='p-3 mb-2 bg-light text-dark w-25 rounded-2'>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" ref={inputEmail}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Idade</label>
                <input type="number" class="form-control w-100" id="exampleInputPassword1" ref={inputAge}/>
              </div>
              <div class="mb-3">
                <label htmlFor="">Nome</label>
                <input type="text" className='form-control w-100' ref={inputName}/>
              </div>
              <button type="button" onClick={createdUsers} class="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
        
        
          
          <div class=' d-flex justify-content-center mt-3 p-3 mb-2'>
            {users.map((user)=>(
              <div class="card" key={user.id}>
                <div class="card-body">
                  <p>Nome: {user.name}</p>
                  <p>Idade: {user.age}</p>
                  <p>Email:{user.email}</p>   
                </div>
                <div>
                  <input type="button" value="X" onClick={()=> deleteUsers(user.id)} />
                </div>
              </div>
            ))}
            
          </div>
          
        
        
      </div>
      

      
      
      
      
   
  )
}

export default Home

