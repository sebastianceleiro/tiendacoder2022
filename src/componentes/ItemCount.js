import react, {useState} from 'react' ;

const ItemCount = ({stock,cantidadInicial}) => { 

const [cantidad, setCantidad]= useState (cantidadInicial) ;

const sumarCantidad = () => {
    (cantidad < stock) ? setCantidad  (parseInt(cantidad ) + 1) : alert("No hay tanto stock disponible");
}

const restarCantidad = () => {
    (cantidad >= 2) ? setCantidad (parseInt(cantidad) - 1) : alert ("Al menos debe haber 1 producto") ;
}

const addOn = () => {
    alert ("agregado al carrito")
}
    return  (
        <>
            <div>
                <button onClick={restarCantidad}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumarCantidad}>+</button>
                <button onClick={addOn}>Guardar</button>
            </div>
    
        </> )} ;

export default ItemCount ;