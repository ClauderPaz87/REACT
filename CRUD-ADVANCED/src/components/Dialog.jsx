import { useRef , useEffect } from "react"
import { v4 } from "uuid"

const Dialog = ({dialog , dispatch , usersEdit}) => {

    const inputName = useRef('')
    const inputEmail = useRef('')
    const inputPhone = useRef('')

    const btnSave = ()=>{
        if(!inputName.current.value || !inputEmail.current.value || !inputPhone.current.value ) return
        dispatch({type:'editUsers', id:usersEdit.id  , name:inputName.current.value , email:inputEmail.current.value , phone:inputPhone.current.value})
        dialog.current.close()
    }

    const btnCancel = ()=>{
        dialog.current.close()
    }

    return (
        <div>

            <div className="d-flex justify-content-center mt-2">
                <h1>Editar Usuário</h1>
            </div>

            <div className="ms-5 mt-2">
                <label htmlFor="">Nome</label>
                <br />
                <input ref={inputName} className="border-0 border border-bottom border-secondary inputName" type="text" />
            </div>

            <div className="ms-5 mt-3">
                <label htmlFor="">Email</label>
                <br />
                <input ref={inputEmail} className="border-0 border border-bottom border-secondary inputEmail" type="email" />
            </div>

            <div className="ms-5 mt-3">
                <label htmlFor="">Telefone</label>
                <br />
                <input ref={inputPhone} className="border-0 border border-bottom border-secondary inputPhone" type="number" />
            </div>

            <div className="mt-3 text-center">
                <button onClick={btnSave} class="btn btn-primary me-2">Salvar</button>
                <button onClick={btnCancel} class="btn btn-danger">Cancelar</button>
            </div>

        </div>
    )
}

export default Dialog