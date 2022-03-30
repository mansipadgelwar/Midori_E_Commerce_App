import "./App.css";
import { Home, ProductListing, MyWishlist, MyCart } from "./pages";
import { Route, Routes } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/mywishlist" element={<MyWishlist />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;
