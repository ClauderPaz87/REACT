import { useEffect, useState, useRef } from 'react'
import { v4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
//const [users, setUsers] = useState([]) ALTERAR O VALOR DENTRO DA VARIAVEL
//const input = useRef() PEGAR O INPUT PARA MANIPULAÇÃO (COLOCAR REF=NOME DA CONST DENTRO DO INPUT)

function Home() {
  const inputList = useRef(0)
  const [products, setProducts] = useState([])

  function btnList() {

    setProducts([
      ...products,
      {
        name: inputList.current.value,
        id: v4()
      }
    ])
  }

  function btnDelete(id) {
    setProducts(products.filter((product)=> product.id !== id))
  }
  return (
    <div>

      <div>
        <h1>Lista de Compra</h1>
        <p><input type="text" ref={inputList} /> <button onClick={btnList} type='button'>Adicionar</button></p>
      </div>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button type='button' onClick={() => btnDelete(product.id)}>XX</button>
        </div>
      ))}


    </div>

  )
}

export default Home
