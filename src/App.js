import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'; 
import {Route, Switch, BrowserRouter} from 'react-router-dom' ;
import {CartContext} from './componentes/CartContext' ;
import Cart from './componentes/Cart'


function App() {
  return (
   <>
   <BrowserRouter>
   <CartContext>
      <NavBar/>
   <Switch>
   
   <Route exact path="/">
      <ItemListContainer />
   </Route>
   <Route path="/categoria/:categoria">
      <ItemListContainer />
   </Route>
   <Route path="/item/:id">
      <ItemDetailContainer/>
   </Route>
   <Route path="/cart">
      <Cart/>
   </Route>
   </Switch>
   </CartContext>
   </BrowserRouter>
  </>
  );
}

export default App;
