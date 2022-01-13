import NavBar from './componentes/Navbar' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
   <>
   <NavBar/>
   <ItemListContainer greeting="Hola Mundo" />
  
  </>
  );
}

export default App;
