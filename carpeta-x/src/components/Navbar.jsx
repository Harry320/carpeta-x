import { Link } from "react-router-dom"


export const Navbar =() =>{
    return(
        <header className="header">
            <div className="navar_conteiner" >
            <h1> <img src="/logo.png" width={'150px'} alt="Logo" /></h1>
                <nav className="navbar">
                    <Link to={"/inicio"} className="navbar_link">Inicio</Link>
                    <Link to={"/productos"} className="navbar_link">Productos</Link>
                    <Link to={"/contactos"} className="navbar_link" >Contactos</Link>
                </nav>
               
            </div>
        </header>
    )
}