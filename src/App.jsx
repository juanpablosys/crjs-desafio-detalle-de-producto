import "./App.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/Navbar";

function App() {
   return (
      <>
         <NavBar />
         <ItemListContainer />
         <ItemDetailContainer />
      </>
   );
}

export default App;
