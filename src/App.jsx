import Navbar from "./Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

const App = () => {
  return(
    <>
      <Navbar />
      <ItemListContainer msj="Hola Verano" />
    </>
  )
}

export default App;