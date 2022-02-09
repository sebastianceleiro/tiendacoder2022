import Item from './Item' ;
import {Container, Row, Col} from 'react-bootstrap' ;

const ItemList = ({items}) => {
    
    return (<>
             <Container>
             <Row>
                {items.map(item => {
                   return ( <Col sm={3}><Item 
                                id={item.id}
                                nombre={item.nombre}
                                precio= {item.precio}
                                descripcion= {item.descripcion}
                                url= {item.url} />
                                </Col> )})
                }
                </Row>
                </Container> 
            </>)
}

export default ItemList ;