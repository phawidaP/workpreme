import { useState } from 'react'
import Home from './pages/Home'


function App(props) {
  const [count, setCount] = useState(0)

  return (
  <Home/>
  )
}


export default App