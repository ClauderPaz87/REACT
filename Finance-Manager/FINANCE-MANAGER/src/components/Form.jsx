
const Form = () => {
    return (
        <div className="d-flex justify-content-center mt-3 me-4 ">

            <div className="row bg-light rounded-2 shadow formInputs">

                <div className="col-3 mt-2 ms-4">
                    <p className="mb-0">Descrição</p>
                    <input className="rounded-1 border border-secondary" type="text" />
                </div>
                <div className="col-3 mt-2 ms-4">
                    <p className="mb-0">Valor</p>
                    <input className="rounded-1 border border-secondary" type="number" />
                </div>

                <div class="form-check d-flex align-items-center row col-4 mt-2">
                    <div className="col-1 me-5">
                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                        <label htmlFor="">Entrada</label>
                    </div>
                    <div className="col-1 ms-3">
                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                        <label htmlFor="">Saída</label>
                    </div>
                </div>

                <div className="col-1 mt-3">
                    <button type="button" class="btn btn-info">Adicionar</button>
                </div>

            </div>

        </div>
    )
}

export default Form