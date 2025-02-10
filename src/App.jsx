import React, { useState } from 'react'

const App = () => {
  
  function FAQ({question , answer}) {
    const  [move, setMove] = useState(false)
    function toggleAction() {
      setMove(!move)
    }
    return(
      <div>
      <button onClick={toggleAction}>{question}</button>
      {move && <p>{answer}</p>}
      </div>
    )
  }
  return (
      <div>
      <FAQ question={"What is React?"} answer={"React is a JavaScript library for building UI."}></FAQ>
      <FAQ question={"What is JSX?"} answer={"JSX is a syntax extension for JavaScript."}></FAQ>
      <FAQ question={"Why use React?"} answer={"React makes UI development efficient and reusable."}></FAQ>
    </div>
  )
}

export default App
