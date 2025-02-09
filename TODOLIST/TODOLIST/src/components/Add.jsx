import { useEffect } from "react"

const Add = ({ }) => {

    return (
        <div class="input-group row d-flex justify-content-center mt-5">
            <div className='col-8 ms-5'>
                <input type="text" class="form-control ms-4 inputTask" placeholder="Adicione uma tarefa" aria-describedby="button-addon2" />
            </div>
            <div className='col-2'>
                <button class="btn btn-outline-secondary ms-4 btnAdd" type="button" id="button-addon2">Adicionar</button>
            </div>
        </div>
    )
}

export default Add