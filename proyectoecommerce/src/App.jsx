import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './navbar/navbar'
import Formulario from './Formulario/Formulario'
import Titulo from './Titulo/Titulo'
import Footer from './Footer/Footer'
import ComponenteContainer from './ComponenteContainer/ComponenteContainer'



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <ComponenteContainer saludar="Bienvenido a Techno"/>
    
    </div>
  )
}

export default App
