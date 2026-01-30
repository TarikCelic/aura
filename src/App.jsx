import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
