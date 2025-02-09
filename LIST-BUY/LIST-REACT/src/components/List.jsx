import React from 'react'

const List = ({pro,btn}) => {

    return (
        <div>
            <p>{pro.text}</p>
            <button onClick={()=>btn(pro.id)} type='button'>XX</button>
        </div>
    )
}

export default List