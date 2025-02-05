import React from 'react'

const List = ({List, RemoveTask}) => {

    return (
        <div>
            <p>{List.name}</p>
            <button type='button' onClick={() => RemoveTask(List.id)}>XX</button>
        </div>
    )
}

export default List