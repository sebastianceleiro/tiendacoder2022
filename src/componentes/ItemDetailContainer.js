import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react' ;
import {useParams} from 'react-router-dom' ;
import {getFirestore} from '../firebase/firebase' ;
import {Spinner} from 'react-bootstrap' ;


const ItemDetailContainer = () => {

    const [item, setItem] = useState ([]) ;
    const {id} = useParams() ;
    const [loading, setLoading] = useState (<Spinner animation="border" variant="dark"/>) ;

    useEffect(() => {

        const db = getFirestore () ;
        const itemColecction = db.collection("producto") ;
        const miItem = itemColecction.doc(id) ;


        miItem.get()
        .then((doc) =>  {
            if (!doc.exists) {
                console.log ("No se encontro el producto");
                return
            }

        setItem ( {id: doc.id, ...doc.data()})
        setLoading ("") ;
                
        }
        )
        .catch ((err) => {
            console.log (err) ;
        })

}, [])


    return ( <>
             <div className="w-25 mt-2 text-center m-auto"> {loading}</div>
             <ItemDetail producto={item}/> 
             </>) 
} ;

export default ItemDetailContainer ;