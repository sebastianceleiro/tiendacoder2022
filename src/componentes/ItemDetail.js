import {Card, Container} from 'react-bootstrap' ;
import ItemCount from './ItemCount' ;

const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
            <>
            <div className="bg-light border w-50 m-auto text-center">Item Detail - Mostrando 1 producto
            <Card className="m-auto" style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${producto.precio}</Card.Subtitle>
                <Card.Img variant="top" src={producto.url} />
                <Card.Text>{producto.descripcion}</Card.Text>
             </Card.Body>
             </Card>
             <ItemCount  stock="10" cantidadInicial="1"/> 
             </div>
             </>)
} ;

export default ItemDetail ;