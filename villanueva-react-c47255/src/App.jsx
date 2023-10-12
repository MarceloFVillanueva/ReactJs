import NavBar from './assets/components/NavBar/NavBar'
import ProductListContainer from './assets/components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <>
      <NavBar/>
      <ProductListContainer greeting='Bienvenidos!!!!'/>
    </>
  )
}

export default App