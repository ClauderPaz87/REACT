import React, { useRef } from 'react'

const Edit = ({ dialog, dispatch, edit }) => {
  const inputEdit = useRef('')

  const btnSave = () => {
    if (!inputEdit.current.value) return
    dispatch({ type: 'editTasks', id: edit.id, name: inputEdit.current.value })
    dialog.current.close()
  }
  const btnCancel = () => {
    dialog.current.close()
  }

  return (
    <dialog ref={dialog} className='position-absolute top-50 start-50 translate-middle w-50 h-50 border-0 shadow'>
      <div className='mt-2'>
        <p className='text-center fs-1 fw-bolder'>Editar Tarefa</p>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <input ref={inputEdit} className='p-1 w-50' placeholder='edite sua tarefa' type="text" />
      </div>
      <div className='row w-100 mt-3 d-flex justify-content-center'>
        <div className='col-2'>
          <button type="button" onClick={btnSave} class="btn btn-success">Salvar</button>
        </div>
        <div className='col-2'>
          <button type="button" onClick={btnCancel} class="btn btn-danger">Cancelar</button>
        </div>

      </div>
    </dialog>
  )
}

export default Edit