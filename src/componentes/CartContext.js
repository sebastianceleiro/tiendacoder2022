
import React, {useState, createContext} from 'react' ;

export const Context = createContext() ;  

export const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]) ;
   
    const agregarCarrito = (producto,cantidad) => {
        if (yaExisteEnCarrito(producto.id)) {
            const indexItem =  carrito.findIndex(ele => ele.item.id === producto.id ) ;
            carrito[indexItem].cantidad = carrito[indexItem].cantidad + cantidad ;
            setCarrito ([...carrito]) 
        } else {
        setCarrito ([...carrito, {item: producto, cantidad}]) } ;
    }

    const borrarCarrito = () => {
        console.log (" borrando el carrito")
        setCarrito ([]) ;
    }

    const borrarUno = (id) =>{
        const actualizarCarrito = carrito.filter(producto => producto.item.id !== id)
        setCarrito (actualizarCarrito);

    }

    const yaExisteEnCarrito = (id) => {
        return carrito.some(element => element.item.id === id)
    }

    const calcularTotal = () => {
        if (carrito.length != 0) {
        return carrito.map (producto => producto.item.precio * producto.cantidad).reduce ((a,b) => a + b) 
        } else { console.log (" no se calcula nada")}
    }

    const cantidadDeProductos = () => {
        if (carrito.length != 0) {
        return carrito.map(producto => producto.cantidad).reduce ((a,b) => a + b)}
        else { return 0}
    }


return (
<>
<Context.Provider value={{agregarCarrito, borrarCarrito, carrito, setCarrito, borrarUno,calcularTotal, cantidadDeProductos}}>
{children}

</Context.Provider>
</>);
}

