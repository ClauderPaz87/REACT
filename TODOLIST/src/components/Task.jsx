import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Task = ({tasks , dispatch , dialog , deleteTasks}) => {

    const btnEdit = ()=>{
        dispatch({type:'valueEditTask' , task:tasks})
        dialog.current.showModal()
    }

    const btnDelete = (id)=>{
        dispatch({type:'deleteTasks' , id:id})
        deleteTasks(id)
    }

    const btnCheckbox = (id)=>{
        dispatch({type:'completedTask', id:id, completed:tasks.completed})
    }

    return (
        <div className='d-flex justify-content-center'>

            <div className='row mt-5 divTask shadow w-75 rounded-2 p-1' >

                <div className='col-2 p-2 d-flex align-items-center'>
                    <input onChange={()=>btnCheckbox(tasks.id)} className='w-25 inputCheckbox' type="checkbox" />
                </div>

                <div className='col-8 d-flex align-items-center' style={{textDecoration: tasks.completed ? "line-through" : ""}}>
                    <p className="fs-4 fw-bolder">{tasks.name}</p>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button onClick={btnEdit} className='w-50 bg-transparent border-0'><FaRegEdit/></button>
                </div>

                <div className='col-1 d-flex align-items-center'>
                    <button onClick={()=> btnDelete(tasks.id)} className='w-50 bg-transparent border-0'><MdDelete/></button>
                </div>

            </div>
        </div>
    )
}

export default Task