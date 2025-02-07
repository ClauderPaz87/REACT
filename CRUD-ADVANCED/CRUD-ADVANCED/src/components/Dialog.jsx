import { useRef , useEffect } from "react"

const Dialog = ({dialog , editUser , newUser}) => {
    const nameEdit = useRef('')
    const emailEdit = useRef('')
    const phoneEdit = useRef('')

    useEffect(() => {
        if(newUser){
            nameEdit.current.value = newUser.name || ''
            emailEdit.current.value = newUser.email || ''
            phoneEdit.current.value = newUser.phone || ''
        }
        
    }, [newUser])
    

    const btnSave = ()=>{
        if(!nameEdit.current.value ||
            !emailEdit.current.value ||
            !phoneEdit.current.value
        ) return

        editUser(
            nameEdit.current.value,
            emailEdit.current.value,
            phoneEdit.current.value
        )
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
                <input ref={nameEdit} className="border-0 border border-bottom border-secondary inputName" type="text" />
            </div>

            <div className="ms-5 mt-3">
                <label htmlFor="">Email</label>
                <br />
                <input ref={emailEdit} className="border-0 border border-bottom border-secondary inputEmail" type="email" />
            </div>

            <div className="ms-5 mt-3">
                <label htmlFor="">Telefone</label>
                <br />
                <input ref={phoneEdit} className="border-0 border border-bottom border-secondary inputPhone" type="number" />
            </div>

            <div className="mt-3 text-center">
                <button type="button" onClick={btnSave} class="btn btn-primary me-2">Salvar</button>
                <button type="button" onClick={btnCancel} class="btn btn-danger">Cancelar</button>
            </div>

        </div>
    )
}

export default Dialog