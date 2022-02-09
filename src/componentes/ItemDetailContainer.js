import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom' ;
import { Spinner } from 'react-bootstrap';
import {getFirestore} from '../firebase/firebase' ;


const ItemDetailContainer = () => {

    const [item, setItem] = useState ([]) ;
    const {id} = useParams() ;

    useEffect(() => {

        const db = getFirestore () ;
        const itemColecction = db.collection("producto") ;
        const miItem = itemColecction.doc(id) ;


        miItem.get()
        .then((doc) =>  {
            if (!doc.exists) {
                console.log ("no se encontro el producto");
                return
            }
            console.log ("se encontro el producto") ;

        setItem ( {id: doc.id, ...doc.data()})
                
        }
        )
        .catch ((err) => {
            console.log (err) ;
        })


   /* const promesa = new Promise ((resolve) => 
        {
        setTimeout(() => {
        resolve (productos)
        }, 1000);
}) ; 
    promesa.then(res => {
        setArrayDeProductos (res[id]) ; // Mando un producto en concreto
        setTerminoLaPromesa (true) ;
    }) */
}, [])


    return ( <>
             <ItemDetail producto={item}/> 
             </>) 
} ;

export default ItemDetailContainer ;