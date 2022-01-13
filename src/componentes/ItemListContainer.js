import ItemCount from './ItemCount' ;

const ItemListContainer = ({greeting}) => {
    return ( 
        <>
        <div> {greeting} </div>
        <ItemCount stock="10" cantidadInicial="1"/> 
        </> )
}

export default ItemListContainer ;