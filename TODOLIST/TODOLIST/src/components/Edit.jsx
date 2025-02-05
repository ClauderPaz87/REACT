import React from 'react'

const Edit = ({save,cancel,dialog,input}) => {
  return (
    <dialog ref={dialog} className='position-absolute top-50 start-50 translate-middle w-50 h-50'>
        <div>
          <h1 className='text-center'>Editar Tarefa</h1>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <input className='p-1 w-50' ref={input} placeholder='edite sua tarefa' type="text" />
        </div>
        <div className='row w-75 mt-3'>
          <div className='col-3'>
            <button type="button" onClick={save} class="btn btn-success">Salvar</button>
          </div>
          <div className='col-4'>
            <button type="button" onClick={cancel} class="btn btn-danger">Cancelar</button>
          </div>

        </div>
      </dialog>
  )
}

export default Edit