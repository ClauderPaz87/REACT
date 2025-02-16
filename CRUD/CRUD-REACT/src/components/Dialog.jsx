import { useRef, useEffect } from "react"
import { v4 } from 'uuid';

const Dialog = ({ dialog, dispatch, users, createUsers }) => {
    const name = useRef('')
    const email = useRef('')
    const phone = useRef('')
    const city = useRef('')

    const btnSave = () => {
        if (!name.current.value || !email.current.value || !phone.current.value || !city.current.value) return
        dispatch({ type: 'addUsers', id: v4(), name: name.current.value, email: email.current.value, phone: phone.current.value, city: city.current.value })
        
        createUsers(
            name.current.value,
            email.current.value,
            phone.current.value,
            city.current.value
        )
        dialog.current.close()
    }

    useEffect(() => {
        name.current.value = ''
        email.current.value = ''
        phone.current.value = ''
        city.current.value = ''

    }, [users])


    const btnCancel = () => {
        dialog.current.close()
    }

    return (
        <div>
            <div className='d-flex justify-content-center divP'>
                <p className='fs-3 fw-bolder mt-2'>Novo Cliente</p>
            </div>

            <div className='row w-100 d-flex justify-content-center'>

                <div className='col-5 mt-4'>
                    <input ref={name} className='p-2 w-100 border border-secondary rounded-2' placeholder='Nome do Cliente' type="text" />
                </div>

                <div className='col-5 mt-4'>
                    <input ref={email} className='p-2 w-100 border border-secondary rounded-2' placeholder='Email do Cliente' type="email" />
                </div>

            </div>

            <div className='row w-100 d-flex justify-content-center'>

                <div className='col-5 mt-5'>
                    <input ref={phone} className='p-2 w-100 border border-secondary rounded-2' placeholder='Celular do Cliente' type="number" />
                </div>

                <div className='col-5 mt-5'>
                    <input ref={city} className='p-2 w-100 border border-secondary rounded-2' placeholder='Cidade do Cliente' type="text" />
                </div>

            </div>

            <div className="row w-100 d-flex justify-content-end mt-5">

                <div className="col-1">
                    <button onClick={btnSave} type="button" class="btn btn-success">Salvar</button>
                </div>

                <div className="col-1 me-5">
                    <button onClick={btnCancel} type="button" class="btn btn-info">Cancelar</button>
                </div>

            </div>
        </div>
    )
}

export default Dialog