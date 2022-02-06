
import ItemList from './ItemList' ;
import productos from '../productos/productos';
import { useState, useEffect } from 'react';
import {Spinner} from 'react-bootstrap' ;
import {useParams} from 'react-router-dom' 

const ItemListContainer = () => {

    const {categoria} = useParams();
    const [arrayProductos, setArrayProductos] = useState([]) ;
    const [loading, setLoading] = useState (<Spinner animation="border" variant="primary"/>) ;


    const promesa = new Promise ((resolve) => {
        setTimeout(() => {
        resolve (productos)
        }, 1000);
    })

    useEffect (() =>  {
             
        promesa.then(res => {
            setArrayProductos (res)
      
            if (categoria != undefined) {setArrayProductos (res.filter(producto => producto.categoria === categoria) ) } ;
            
            setLoading ("") ;
        })
     
    },[categoria])

    return ( 
        <>
        <div className="w-25 mt-2 text-center m-auto"> {loading}</div>
        <br/>
        <ItemList items={arrayProductos}/>
        </> )
}

export default ItemListContainer ;