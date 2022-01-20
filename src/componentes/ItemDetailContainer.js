import ItemDetail from './ItemDetail';
import productos from '../productos/productos' ;
import {useState, useEffect} from 'react' ;


const ItemDetailContainer = () => {

    const [arrayDeProductos, setArrayDeProductos] = useState ([]) ;
    const [terminolapromesa, setTerminoLaPromesa] = useState (false) ;
    useEffect(() => {

    const promesa = new Promise ((resolve) => 
        {
        setTimeout(() => {
        resolve (productos)
        }, 1000);
}) ;

    promesa.then(res => {
        setArrayDeProductos (res[1]) ; // Mando un producto en concreto
        setTerminoLaPromesa (true) ;
    })
}, [])

if (terminolapromesa == true) {
    return ( <>
             <ItemDetail producto={arrayDeProductos}/> 
             </>) }  else  return ( <div>Cargando producto....</div>);
} ;

export default ItemDetailContainer ;