import react, {useState} from 'react' ;
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom' ;

const ItemCount = ({stock,cantidadInicial,controlStock}) => { 

const [cantidad, setCantidad]= useState (cantidadInicial) ;

const sumarCantidad = () => {
    (cantidad < stock) ? setCantidad  (parseInt(cantidad ) + 1) : alert("No hay tanto stock disponible");
}

const restarCantidad = () => {
    (cantidad >= 2) ? setCantidad (parseInt(cantidad) - 1) : alert ("Al menos debe haber 1 producto") ;
}

const onAdd = () => {
    controlStock(cantidad);

}
    return  (
        <>  
            <div className="m-3">
                <Button className="m-2 border border-secondary " variant="inherit" size="sm" onClick={restarCantidad}>-</Button>
                {cantidad}
                <Button className="m-2 border border-secondary " variant="inherit" size="sm" onClick={sumarCantidad}>+</Button>
                <br></br>
                <Link to="/Cart"><Button className="m-2" variant="secondary" size="sm" onClick={onAdd}>Comprar</Button></Link>
            </div>
    
        </> )} ;

export default ItemCount ;