import React from 'react'

const ChildB = ({setCount}) => {
  return (
    <div>
        <button  onClick={()=>{{setCount(prev => prev + 1)}}}>Increase</button>
    </div>
  )
}

export default ChildB