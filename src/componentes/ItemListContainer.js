
import ItemList from './ItemList' ;
import { useState, useEffect } from 'react';
import {Spinner} from 'react-bootstrap' ;
import {useParams} from 'react-router-dom' 
import {getFirestore} from '../firebase/firebase' ;

const ItemListContainer = () => {

    const {categoria} = useParams();
    const [items, setItems] = useState ([]) ;
    const [loading, setLoading] = useState (<Spinner animation="border" variant="dark"/>) ;

    useEffect (() =>  {

        const db = getFirestore () ;
        const itemColecction = db.collection("producto") ;

        if (categoria !== undefined)  {
            const itemPorCategoria = itemColecction.where("categoria","==", categoria ) ;
            itemPorCategoria.get()
            .then((querySnapShot) =>  {
                if (querySnapShot.size === 0) {
                    console.log ("No se encontraron documentos");
                    setLoading ("") ;
                    return
                }
    
            setItems (querySnapShot.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}}))
                    
                    setLoading ("") ;
            }
            )
            .catch ((err) => {
                console.log (err) ;
            })  }
  else {
        itemColecction.get()
        .then((querySnapShot) =>  {
            if (querySnapShot.size === 0) {
                setLoading ("") ;
                return
            }

        setItems (querySnapShot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}}))
                
                setLoading ("") ;
        }
        )
        .catch ((err) => {
            console.log (err) ;
        })
    }

    },[categoria])

    
    return ( 
        <>
        <div className="w-25 mt-2 text-center m-auto"> {loading}</div>
        <br/>
        <ItemList items={items}/>  
        </> )
}

export default ItemListContainer ;