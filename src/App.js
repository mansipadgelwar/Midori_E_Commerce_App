import "./App.css";
import {
  Home,
  ProductListing,
  MyWishlist,
  MyCart,
  Login,
  Logout,
  Signup,
  Checkout,
  Profile,
  Address,
  OrderSummary,
  NotFound,
} from "./pages";
import { RequiresAuth } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route
          path="/mywishlist"
          element={
            <RequiresAuth>
              <MyWishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/mycart"
          element={
            <RequiresAuth>
              <MyCart />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
