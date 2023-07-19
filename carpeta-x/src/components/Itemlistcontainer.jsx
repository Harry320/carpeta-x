
import data from '../data.json'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

export const Itemlistcontainer =() =>{
    const [producto, setProducto] = useState([])
    useEffect(() => {

         new Promise((resolve, reject) => {
  
      resolve(data)
  })
              .then(producto => { setProducto(producto) })
  
              })
    return(
        <div>
            <h1>Productos</h1>
        <div className='contenedor'>
            
            <div className='contenedor-productos'>
            { producto.map((producto) => (
                            <div className='targeta-producto' key={producto.id}  >
                                <img className='productos-imagen' src={producto.imagen} alt={producto.nombre} /> 
                                <div className='producto-info'>{producto.nombre}</div>
                                <div className='producto-info'>${producto.precio}</div>
                               <div className='producto-info'> <Button  variant="primary">Agregar</Button> </div>
                            </div>
                        ))
}
                </div>
            </div>
        </div> )
    
}
