import { useRef } from "react"

const Dialog = ({dialog , addUser}) => {
    const name = useRef(0)
    const email = useRef(0)
    const phone = useRef(0)
    const city = useRef(0)

    const cancel = ()=>{
        dialog.current.close()
    }

    const save = ()=>{
        if(!name.current.value || !email.current.value || !phone.current.value || !city.current.value) return
        addUser(
            name.current.value,
            email.current.value,
            phone.current.value,
            city.current.value
        )

        dialog.current.close()
       
    }

    return (
        <div>
            <div className='d-flex justify-content-center divP'>
                <p className='fs-3 fw-bolder mt-2'>Novo Cliente</p>
            </div>

            <div className='row w-100 d-flex justify-content-center'>

                <div className='col-5 mt-4'>
                    <input className='p-2 w-100 border border-secondary rounded-2' ref={name} placeholder='Nome do Cliente' type="text" />
                </div>

                <div className='col-5 mt-4'>
                    <input className='p-2 w-100 border border-secondary rounded-2' ref={email} placeholder='Email do Cliente' type="email" />
                </div>

            </div>

            <div className='row w-100 d-flex justify-content-center'>

                <div className='col-5 mt-5'>
                    <input className='p-2 w-100 border border-secondary rounded-2' ref={phone} placeholder='Celular do Cliente' type="number" />
                </div>

                <div className='col-5 mt-5'>
                    <input className='p-2 w-100 border border-secondary rounded-2' ref={city} placeholder='Cidade do Cliente' type="text" />
                </div>

            </div>

            <div className="row w-100 d-flex justify-content-end mt-5">

                <div className="col-1">
                    <button type="button" onClick={save} class="btn btn-success">Salvar</button>
                </div>

                <div className="col-1 me-5">
                    <button type="button" onClick={cancel} class="btn btn-info">Cancelar</button>
                </div>

            </div>
        </div>
    )
}

export default Dialog