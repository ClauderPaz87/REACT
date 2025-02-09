import { useReducer, useRef } from 'react'
import List from "../../components/List/"
import { v4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'

const reducer = (state,action)=>{
  switch(action.type){
    case 'productText':
      return {...state, product: [...state.product, {id:v4() , text: action.text}]}
    case 'deleteProduct':
      return {...state, product: state.product.filter((p)=> p.id !== action.id)}
  }
}
function Home() {
  const inputRef = useRef('')

  const [state,dispatch] = useReducer(reducer,{
    product : []
  })
   
  const btnAdd = ()=>{
    dispatch({type: 'productText', text:inputRef.current.value})
  }

  const btnDelete = (ide)=>{
    dispatch({type: 'deleteProduct', id: ide})
  }

  return (
    <div>

      <div>
        <h1>Lista de Compra</h1>
        <p><input type="text" ref={inputRef} /> <button onClick={btnAdd} type='button'>Adicionar</button></p>
      </div>

      {state.product.map((p)=>
        <List pro={p} btn={btnDelete} />
      )}

      

    </div>

  )
}

export default Home
