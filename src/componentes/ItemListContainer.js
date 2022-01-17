import ItemCount from './ItemCount' ;
import ItemList from './ItemList' ;
import productos from '../productos/productos';
import { useState, useEffect } from 'react';

const ItemListContainer = ({greeting}) => {

    const [arrayProductos, setArrayProductos] = useState([]) ;
    const [loading, setLoading] = useState ("Cargando Productos...") ;

    const promesa = new Promise ((resolve) => {
        setTimeout(() => {
        resolve (productos)
        }, 3000);
       
    }
    )

    promesa.then(res => {
        setArrayProductos (res) ;
        setLoading ("") ;
    })

    return ( 
        <>
        <div> {greeting} </div>
        <div> {loading}</div>
        <br/>
        <ItemList items={arrayProductos}/>
        <ItemCount stock="10" cantidadInicial="1"/> 
       
        </> )
}

export default ItemListContainer ;