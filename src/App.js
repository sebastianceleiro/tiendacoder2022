import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'; 
import {Route, Switch, BrowserRouter} from 'react-router-dom' ;
import {CartContext} from './componentes/CartContext' ;


function App() {
  return (
   <>
   <BrowserRouter>
      <NavBar/>
   <Switch>
   <CartContext>
   <Route exact path="/">
      <ItemListContainer />
   </Route>
   <Route path="/categoria/:categoria">
      <ItemListContainer />
   </Route>
   <Route path="/item/:id">
      <ItemDetailContainer/>
   </Route>
   </CartContext>
   <Route patch="*"> <div className="p-3"> Hubo un error! - No existe la pagina</div></Route>
   </Switch>
   </BrowserRouter>
  </>
  );
}

export default App;
