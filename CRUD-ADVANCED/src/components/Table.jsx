import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Table = ({ user , dispatch , dialog }) => {

    const btnEdit = (u)=>{
        dispatch({type:'addEditValues' , userEd:u})
        dialog.current.showModal()
    }

    const btnDelete = (idr)=>{
        dispatch({type:'deleteUser', id:idr})
    }

    return (
        <div className="bg-light text-dark mt-4 w-75 rounded-3 shadow tableUser">

            <div className="">
                <table class="table table-hover mt-3">
                    <thead className="table-primary">
                        <tr>
                            <th className="border-end border border-light border-0 border-2" scope="col">Nome</th>
                            <th className="border-end border border-light border-0 border-2" scope="col">Email</th>
                            <th className="border-end border border-light border-0 border-2" scope="col">Fone</th>
                            <th className="border-end border border-light border-0 border-2 iconsTable"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user
                        .sort((a,b)=> a.name ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
                        .map((u) =>
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td className="d-flex justify-content-center">
                                    <button onClick={()=>btnEdit(u)} className="border-0 bg-transparent me-2"><FaRegEdit /></button>
                                    <button onClick={()=> btnDelete(u.id)} className="border-0 bg-transparent"><MdDelete /></button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table