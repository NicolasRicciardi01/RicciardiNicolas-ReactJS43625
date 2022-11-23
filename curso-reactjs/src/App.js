import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"La mejor tienda de zapatillas"}/>
      <Footer />
    </div>
  );
}

export default App;