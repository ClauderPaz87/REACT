import { useState } from 'react'

import Values from '../../components/Values'
import Form from '../../components/Form'
import Table from '../../components/Table'

import './style.css'
import { v4 } from 'uuid'


function App() {


  return (

    <div>

      <div className='d-flex justify-content-center bg-primary divTitle'>
        <h1 className='fw-bolder mt-2 title'>Controle Financeiro</h1>
      </div>

      <div>
        <Values/>
      </div>

      <div className=''>
        <Form/>
      </div>

      <div>
        <Table/>
      </div>

    </div>

  )
}

export default App
