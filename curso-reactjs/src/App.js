import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Error404 from "./components/Error404";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer /> } />
          <Route path={"/categoria/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"*"} element={<Error404 />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;