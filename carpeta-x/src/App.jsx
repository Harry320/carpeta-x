
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Inicio } from "./components/Inicio"
import { Itemlistcontainer } from "./components/Itemlistcontainer"
import { Contactos } from "./components/Contactos"
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <>
       <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/productos" element={<Itemlistcontainer/>} />
          <Route path="/contactos" element={<Contactos/>} />
        </Routes>

      </BrowserRouter> 
    </>
  )
}

export default App
