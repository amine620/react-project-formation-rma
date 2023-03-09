import React, { createContext, useEffect, useState } from 'react'

export const context=createContext()
const DataProvider = (props) => {
    const [users,setusers]=useState([])
    const [counter,setcounter]=useState(0)
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        return response.json()
      })
      .then(response=>{
        console.log(response);
        setusers(response)
      })
    }, [])
  return (
    <div>
    <context.Provider value={{users , setcounter , counter}} >
      {
        props.children
      }
    </context.Provider>
      
    </div>
  )
}

export default DataProvider
