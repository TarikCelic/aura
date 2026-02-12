import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import PCComponents from "./pages/PCComponents/PCComponents";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Category />} />
        <Route path="/shop/components" element={<PCComponents />} />
        <Route path="/shop/components/:category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
//easteregg
