
const Table = ({ user, exclused, edit, addUser }) => {

    const btnEdit = ()=>{
        addUser(user)
        edit.current.showModal()
    }

    return (
        <tbody className='table-secondary'>
            <tr>
                <td className='border-light border-0 border-end border border-3'>{user.name}</td>
                <td className='border-light border-0 border-end border border-3'>{user.email}</td>
                <td className='border-light border-0 border-end border border-3'>{user.phone}</td>
                <td className='border-light border-0 border-end border border-3'>{user.city}</td>
                <td className='w-25 text-center border-0'>
                    <button type="button" onClick={btnEdit} class="btn btn-success me-2">Editar</button>
                    <button type="button" onClick={()=> exclused(user.id)} class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Table