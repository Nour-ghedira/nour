import React,{useState} from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0)
  return (
    <>
 
  <h1>Vite + React</h1>
  <div className="card">
    { props.string}
    
   
    
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
  </>
  )
}

export default Counter