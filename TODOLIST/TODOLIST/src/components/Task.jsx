import { useState } from "react"

const Task = ({}) => {
    
    return (
        <div className='d-flex justify-content-center'>

            <div className='row mt-5 divTask shadow w-75 rounded-2 p-1' >

                <div className='col-2 p-2 d-flex align-items-center'>
                    <input className='w-25 inputCheckbox' type="checkbox" />
                </div>

                <div className='col-8 d-flex align-items-center'>
                    <p></p>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button className='w-50'>E</button>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button className='w-50'>X</button>
                </div>

            </div>
        </div>
    )
}

export default Task