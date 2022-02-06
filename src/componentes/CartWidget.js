import { BsCart2 } from "react-icons/bs";
import {Context}  from './CartContext';
import { useState, useContext, useEffect } from 'react';



function CartWidget () {

const {cantidadDeProductos, agregarCarrito, borrarCarrito} = useContext (Context) ;
const [cantidad, setCantidad] = useState (0) ;

useEffect(() => {
    setCantidad(cantidadDeProductos())
},[agregarCarrito],[borrarCarrito], []);


if (cantidad != 0) {
    return (
    <>
    <BsCart2 size="2em" color="white" />  <b className="text-light">{cantidad}</b>
    </>) }   else { return <div></div>  }} ;
export default CartWidget ;