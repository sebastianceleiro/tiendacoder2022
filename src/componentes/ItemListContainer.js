
import ItemList from './ItemList' ;
import productos from '../productos/productos';
import { useState, useEffect } from 'react';
import {Spinner} from 'react-bootstrap' ;

const ItemListContainer = () => {

    const [arrayProductos, setArrayProductos] = useState([]) ;
    const [loading, setLoading] = useState (<Spinner animation="border" variant="primary"/>) ;

    const promesa = new Promise ((resolve) => {
        setTimeout(() => {
        resolve (productos)
        }, 2000);
       
    }
    )

    promesa.then(res => {
        setArrayProductos (res) ;
        setLoading ("") ;
    })

    return ( 
        <>
        <div className="w-25 mt-2 text-center m-auto"> {loading}</div>
        <br/>
        <ItemList items={arrayProductos}/>
        </> )
}

export default ItemListContainer ;