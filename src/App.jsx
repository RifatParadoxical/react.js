import React, { useState } from 'react'

const App = () => {
const [name, setName] = useState("")
const [mail, setMail] = useState("")
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted:", {name, mail})
  setName("")
  setMail("")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder='Enter Value' value={mail} onChange={(e)=>{setMail(e.target.value)}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
