import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './component/Counter.jsx'

function App() {
  const [string, setstring] = useState("Hello")
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("welcome")
  
  })
  
  

  return (
    <div className="App">
      
      <Counter string={string}/>
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    <button onClick={()=>setstring("welcome")}>change</button>
    </div>
  )
}

export default App
