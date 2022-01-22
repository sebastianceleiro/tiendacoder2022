import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Item = ({id, nombre, descripcion, precio,url}) => {
    return ( <>
           
            <Card className="bg-primary bg-gradient text-white" style={{ width: '15rem' }} >
            <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={url} />
            </Link>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-white">${precio}</Card.Subtitle>
                <Card.Text>{descripcion}</Card.Text>
             </Card.Body>
             </Card>
            
             </>)
}


export default Item ;