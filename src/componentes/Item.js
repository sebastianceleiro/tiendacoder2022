import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Item = ({id, nombre, precio,url}) => {
    return ( <>
           
            <Card className="bg-light border-light text-black text-center" style={{ width: '14rem', heigth: '10rem' }} >
            <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={url} style={{ width: '10rem', heigth: '3rem' }} />
            </Link>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <p className="m-auto w-100 text-center text-dark h5 " >${precio}</p>
             </Card.Body>
             </Card>
            
             </>)
}


export default Item ;