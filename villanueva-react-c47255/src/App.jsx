import { useState } from 'react'
import './App.css'

const Titulo = () => {
  return <h1 className='marce'>Marce Proyect</h1>
}

function App() {
  const [count, setCount] = useState(0)
  const estilos = {color: 'blue'}
    
  return (

    <>
      <Titulo />
      <h3 style={estilos}>Proyect React Js</h3>
      <hr />
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <hr />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App