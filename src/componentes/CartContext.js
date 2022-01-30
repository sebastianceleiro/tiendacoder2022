
import React, {useState, createContext} from 'react' ;

export const Context = createContext() ;  

export const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]) ;

    const agregarContext = (producto) => {
        setCarrito ([...carrito, producto])
    }

    console.log(carrito)

return (
<>
<Context.Provider value={{agregarContext, carrito, setCarrito}}>
{children}
</Context.Provider>
</>);
}

