import { useEffect, useState, useRef } from 'react'
import List from "../../components/List/"
import { v4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'


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
    setProducts(products.filter((product) => product.id !== id))
  }
  return (
    <div>

      <div>
        <h1>Lista de Compra</h1>
        <p><input type="text" ref={inputList} /> <button onClick={btnList} type='button'>Adicionar</button></p>
      </div>

      {products.map((product) => (
        <List List={product} RemoveTask={btnDelete}/>
      ))}


    </div>

  )
}

export default Home
