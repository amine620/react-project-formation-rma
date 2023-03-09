import React, { useContext} from 'react'
import { context } from '../../context/DataProvider'

export const Users = () => {
     const {users}=useContext(context)  
  return (
    <div>
      <h1>Users lists</h1>
      {
        users.map((user)=>(
          <h1 key={user.id} >{user.name}</h1>
        ))
    }
    </div>
  )
}

