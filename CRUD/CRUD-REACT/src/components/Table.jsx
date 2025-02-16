
const Table = ({ deleteUsers , users , dispatch , dialogEdit}) => {

    const btnEdit = (user)=>{
        dispatch({type:'addNewUser' , user })
        
        dialogEdit.current.showModal()
    }

    const btnDelete = (id)=>{
        dispatch({type:'deleteUsers', id:id})
        deleteUsers(id)
    }

    return (
        <table class="table table-hover mt-4">
            <thead className='table-primary'>
                <tr>
                    <th className='border-light border-0 border-end border border-3' scope="col">Nome</th>
                    <th className='border-light border-0 border-end border border-3 w-25'>Email</th>
                    <th className='border-light border-0 border-end border border-3' scope="col">Celular</th>
                    <th className='border-light border-0 border-end border border-3' scope="col">Cidade</th>
                    <th className='text-center border-0' scope="col">Ação</th>
                </tr>
            </thead>
            <tbody className='table-secondary'>
                {users
                .sort((a,b)=> a.name? a.name.localeCompare(b.name) : b.name.localeCompare(a.name) )
                .map((user) => (
                    <tr key={user.id}>
                        <td className='border-light border-0 border-end border border-3'>{user.name}</td>
                        <td className='border-light border-0 border-end border border-3'>{user.email}</td>
                        <td className='border-light border-0 border-end border border-3'>{user.phone}</td>
                        <td className='border-light border-0 border-end border border-3'>{user.city}</td>
                        <td className='w-25 text-center border-0'>
                            <button onClick={()=>btnEdit(user)} type="button" class="btn btn-success me-2">Editar</button>
                            <button onClick={()=>btnDelete(user.id)} type="button" class="btn btn-danger ">Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table