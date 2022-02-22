import Item from './Item' ;
import {Container, Row, Col} from 'react-bootstrap' ;

const ItemList = ({items}) => {
    
    return (<>
             <Container>
             <Row>
                {items.map(item => {
                   return ( <Col xs={12} sm={4} md={3} lg={3} xl={3} className="row justify-content-center"><Item 
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