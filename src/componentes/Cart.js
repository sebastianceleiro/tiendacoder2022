import {Context}  from './CartContext';
import { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom' ;


const Cart = () => {

    const {carrito, borrarCarrito, borrarUno, calcularTotal} = useContext (Context) ;

    const [total, setTotal] = useState () ;

    useEffect(()=> {
        setTotal (calcularTotal())
    },[borrarUno], [])
    
    {if (carrito.length != 0) {
    return (
        <>
        <div> Carrito de Compras </div>
            {carrito.map(items => {
            return ( 
            <>
            <div>
            <b>Producto: </b>{items.item.nombre} - <b>Cantidad: </b>{items.cantidad}
            <b> Precio: $</b>{items.item.precio * items.cantidad}
            <button onClick={ () => borrarUno(items.item.id)}>X</button>
            </div>
            </>)
})}  
        <button onClick={borrarCarrito}>Borrar Items</button>
        <div><b>Total Productos:</b>{total}</div>
        </>

    ) } else { return <div>No hay productos ingresados, puede volver al home haciendo click <Link to="/">Aqui</Link></div> }}
}


export default Cart ;