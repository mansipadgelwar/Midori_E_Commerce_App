import "./App.css";
import {
  Home,
  ProductListing,
  MyWishlist,
  MyCart,
  Login,
  Logout,
  Signup
} from "./pages";
import { Route, Routes } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar";
import { NavBar } from "./components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/mywishlist" element={<MyWishlist />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
