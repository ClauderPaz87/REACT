import { useRef } from "react"
import { v4 } from "uuid"

const Form = ({dispatch}) => {
    const inputName = useRef('')
    const inputEmail = useRef('')
    const inputPhone = useRef('')

    const btnAdd = ()=>{
        if(!inputName.current.value || !inputEmail.current.value || !inputPhone.current.value ) return
        dispatch({type:'addValues', id:v4(), name:inputName.current.value , email:inputEmail.current.value , phone:inputPhone.current.value})
    }

    return (
        <div className='bg-light text-dark w-75 rounded-2 shadow formInputs'>

            <div className='row d-flex align-items-center ms-5 h-100 w-100'>

                <div className='col-3'>
                    <label>Nome</label>
                    <input ref={inputName} className='p-2 rounded-2 border border-secondary-subtle' type="text" />
                </div>

                <div className='col-3'>
                    <label>Email</label>
                    <input ref={inputEmail} className='p-2 rounded-2 border border-secondary-subtle' type="email" />
                </div>

                <div className='col-3'>
                    <label>Telefone</label>
                    <input ref={inputPhone} className='p-2 rounded-2 border border-secondary-subtle' type="number" />
                </div>

                <div className='col-1 mt-4 ms-4'>
                    <button onClick={btnAdd} type="button" class="btn btn-primary">Salvar</button>
                </div>

            </div>

        </div>
    )
}

export default Form