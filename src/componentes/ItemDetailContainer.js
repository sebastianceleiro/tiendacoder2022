import ItemDetail from './ItemDetail';
import productos from '../productos/productos' ;
import {useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom' ;
import { Spinner } from 'react-bootstrap';


const ItemDetailContainer = () => {

    const [arrayDeProductos, setArrayDeProductos] = useState ([]) ;
    const [terminolapromesa, setTerminoLaPromesa] = useState (false) ;

    const {id} = useParams() ;

    useEffect(() => {

    const promesa = new Promise ((resolve) => 
        {
        setTimeout(() => {
        resolve (productos)
        }, 1000);
}) ;

    promesa.then(res => {
        setArrayDeProductos (res[id]) ; // Mando un producto en concreto
        setTerminoLaPromesa (true) ;
    })
}, [])

if (terminolapromesa == true) {
    return ( <>
             <ItemDetail producto={arrayDeProductos}/> 
             </>) }  else  return ( <div className="w-25 mt-2 text-center m-auto"><Spinner animation="border" variant="primary"/></div>);
} ;

export default ItemDetailContainer ;