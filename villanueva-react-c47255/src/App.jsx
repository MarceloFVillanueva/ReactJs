import { useState } from 'react'
import './App.css'
import Formulario from './assets/components/Formulario/Formulario'
import Home from './assets/components/Home/Home'
import NavBar from './assets/components/NavBar/NavBar'
import Titulo from './assets/components/Titulo/Titulo'



function App() {

  const [counter, cambiarValorDeCounter] = useState(0)

  const handCounter = () => {
    cambiarValorDeCounter(counter+1)
  }

  return (

    <>
      <NavBar/>
      <Home saludo='Hola como están?'/>
      <button onClick={handCounter}>click +</button>
      <p>{counter}</p>
    </>
  )
}

export default App