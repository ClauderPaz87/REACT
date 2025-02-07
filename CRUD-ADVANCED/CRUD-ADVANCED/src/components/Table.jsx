import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Table = ({ users , setUsers , dialog, addNewUser}) => {

    const btnDelete = (id)=>{
        setUsers(
            users.filter(user => user.id !== id )
        )
    }

    const btnEdit = (user)=>{
        addNewUser(user)
        dialog.current.showModal()
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

                        {users
                        .sort((a,b) =>
                            a.name ? a.name.localeCompare(b.name) : a
                        )
                        .map(user =>
                            <tr  key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td className="d-flex justify-content-center">
                                    <button onClick={()=> btnEdit(user)} className="border-0 bg-transparent me-2"><FaRegEdit /></button>
                                    <button onClick={()=> btnDelete(user.id)} className="border-0 bg-transparent"><MdDelete /></button>
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