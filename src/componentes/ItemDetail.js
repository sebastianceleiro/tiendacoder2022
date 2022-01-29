import {Card, Container} from 'react-bootstrap' ;
import ItemCount from './ItemCount' ;
import { useState } from 'react';

const ItemDetail = ({producto}) => {

    const [mostrarItemCount, setMostrarItemCount] = useState (true)
    const controlStock = (cantidad) => {
        alert (`Se van a descontar ${cantidad}  producto/s`)
        setMostrarItemCount (false);
    }

    return (
            <>
            <div className="bg-light border w-50 m-auto text-center">Item Detail 
            <Card className="m-auto" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${producto.precio}</Card.Subtitle>
                <Card.Img variant="top" src={producto.url} />
                <Card.Text>{producto.descripcion}</Card.Text>
             </Card.Body>
             </Card>
             { (mostrarItemCount == true) ?
             <ItemCount stock={producto.stock} cantidadInicial="1" controlStock={controlStock}/> 
             : <div></div>
             }</div>
             </>)
}

export default ItemDetail ;