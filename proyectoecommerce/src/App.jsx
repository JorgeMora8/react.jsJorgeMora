import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/navBar/navbar'; 
<script src="https://kit.fontawesome.com/4834373349.js" crossorigin="anonymous"></script>


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <NavBar/>
    </div>
  )
}

export default App
