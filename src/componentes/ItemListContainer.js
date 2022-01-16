import ItemCount from './ItemCount' ;
import ItemList from './ItemList' ;
import productos from '../productos/productos';

const ItemListContainer = ({greeting}) => {

    const promesa = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve (productos)
        }, 4000);
       
    }
    )
    console.log(promesa)
    promesa.then(res => {
        console.log("resultado promesa", res);
        console.log(promesa)
    })

    return ( 
        <>
        <div> {greeting} </div>
        <br/>
        <ItemList items={productos}/>
        <ItemCount stock="10" cantidadInicial="1"/> 
       
        </> )
}

export default ItemListContainer ;