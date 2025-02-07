import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Values = () => {
    return (
        <div className="row d-flex justify-content-center mt-5 w-100">

            <div className="col-4 w-25 bg-white me-3 shadow rounded-1 entries">
                <div className="row mt-2 ms-5">
                    <div className="col-5 me-5">
                        <p className="fw-medium fs-5">Entradas</p>
                    </div>
                    <div className="col-3">
                        <p className=""><FaRegArrowAltCircleUp /></p>
                    </div>
                </div>
                <div>
                    <p className="mb-0 fw-bolder fs-5 text-center">R$RESULTADO</p>
                </div>
            </div>

            <div className="col-4 w-25 bg-white shadow rounded-1 me-3 exits">
                <div className="row mt-2 ms-5">
                    <div className="col-5 me-5">
                        <p className="fw-medium fs-5">Saídas</p>
                    </div>
                    <div className="col-3">
                        <p className=""><FaRegArrowAltCircleDown /></p>
                    </div>
                </div>
                <div>
                    <p className="mb-0 fw-bolder fs-5 text-center">R$RESULTADO</p>
                </div>
            </div>

            <div className="col-4 w-25 bg-white shadow rounded-1 total">
                <div className="row mt-2 ms-5">
                    <div className="col-5 me-5">
                        <p className="fw-medium fs-5">Total</p>
                    </div>
                    <div className="col-3">
                        <p className="fw-bolder fs-5">$</p>
                    </div>
                </div>
                <div>
                    <p className="mb-0 fw-bolder fs-5 text-center">R$RESULTADO</p>
                </div>
            </div>

        </div>
    )
}

export default Values