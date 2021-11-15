import React from 'react'

 const UserItem = ({name, id, onLight, isOnLight}) => {
    return (
        <li style={{background: isOnLight ? 'yellow' : 'none', width: '200px'}}>
            <p>{id} {name}</p>
            <button onClick={() => onLight(id)}>On Light</button>
        </li>
    )
}

export default UserItem