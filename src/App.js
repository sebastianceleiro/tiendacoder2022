import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer'; 


function App() {
  return (
   <>
   <NavBar/>
   <ItemListContainer greeting="Este el listado de nuestros productos" />
   <ItemDetailContainer/>
  </>
  );
}

export default App;
