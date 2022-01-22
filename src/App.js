import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'; 
import {Route, Switch, BrowserRouter} from 'react-router-dom' ;


function App() {
  return (
   <>
   <BrowserRouter>
      <NavBar/>
   <Switch>
   <Route exact path="/">
   <ItemListContainer />
   </Route>
   <Route path="/item/:id">
   <ItemDetailContainer/>
   </Route>
   </Switch>
   </BrowserRouter>
  </>
  );
}

export default App;
