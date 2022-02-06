import {Context}  from './CartContext';
import { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom' ;
import { Button } from 'react-bootstrap';


const Cart = () => {

    const {carrito, borrarCarrito, borrarUno, calcularTotal} = useContext (Context) ;

    const [total, setTotal] = useState () ;

    useEffect(()=> {
        setTotal (calcularTotal())
    },[borrarUno], [])
    
    {if (carrito.length != 0) {
    return (
        <>
        <div className="p-3 w-50 m-auto text-center h4"> Carrito de Compras </div>
            {carrito.map(items => {
            return ( 
            <>
            <div className="w-50 m-auto text-center">
            <img width="50" heigth="30" src={items.item.url}></img>    
            <b>Producto: </b>{items.item.nombre} - <b>Cantidad: </b>{items.cantidad}
            <b> Precio: $</b>{items.item.precio * items.cantidad}
            <Button className="bg-dark btn-sm" onClick={ () => borrarUno(items.item.id)}>X</Button>
            </div>
            </>)
})}  
        <div className="w-50 m-auto text-center" >
        <b onClick={borrarCarrito}>Vaciar Carrito</b>
        <p></p>
        <b className="h5">Total Productos: $</b>{total}
        <p></p>
        <Button className="bg-primary">Terminar mi compra</Button>
        </div>
        </>

    ) } else { return <div className="p-2 w-50 m-auto text-center">No hay productos ingresados, puede volver al home haciendo click <Link to="/">Aqui</Link></div> }}
}


export default Cart ;