
import React, {useState, createContext} from 'react' ;

export const Context = createContext() ;  

export const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]) ;

    const agregarCarrito = (producto,cantidad) => {
        if (yaExisteEnCarrito(producto.id)) {
            const indexItem =  carrito.findIndex(ele => ele.item.id === producto.id ) ;
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad ;
            setCarrito ([...carrito]) ;
        } else {
        setCarrito ([...carrito, {item: producto, cantidad}]) } ;
    }

    const borrarCarrito = () => {
        console.log (" borrando el carrito")
        setCarrito ([]) ;
    }

    const yaExisteEnCarrito = (id) => {
        return carrito.some(element => element.item.id === id)
    }


return (
<>
<Context.Provider value={{agregarCarrito, borrarCarrito, carrito, setCarrito}}>
{children}
<div> Carrito Provisorio </div>
{carrito.map(items => {
    return <div>
           <div><b>Producto: </b>{items.item.nombre} - <b>Cantidad: </b>{items.cantidad}</div>
           </div>
})}
<button onClick={borrarCarrito}>Borrar Items</button>
</Context.Provider>
</>);
}

