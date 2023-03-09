import React, { useContext } from 'react'
import {useSelector} from "react-redux"

const Posts = () => {
   const data=useSelector(state=>state.counter.value)
  return (
    <div>
    <h1>posts</h1>
   <h1>{data}</h1>
    </div>
  )
}

export default Posts
