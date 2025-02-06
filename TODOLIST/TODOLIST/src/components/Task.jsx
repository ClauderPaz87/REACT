import { useState } from "react"

const Task = ({task,check,exclused,edit}) => {
    
    return (
        <div className='d-flex justify-content-center'>

            <div className='row mt-5 divTask shadow w-75 rounded-2 p-1' key={task.id}>

                <div className='col-2 p-2 d-flex align-items-center'>
                    <input className='w-25 inputCheckbox' onChange={() => check(task.id)} checked={task.checked} type="checkbox" />
                </div>

                <div className='col-8 d-flex align-items-center'>
                    <p className={`mb-0 fw-bolder fs-5 ${task.checked ? 'text-decoration-line-through' : ''}`}>{task.value}</p>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button className='w-50' onClick={() => edit(task)} type='button'>E</button>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button className='w-50' onClick={() => exclused(task.id)} type='button'>X</button>
                </div>

            </div>
        </div>
    )
}

export default Task