
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Cart from "./pages/Cart"


function App() {
  return (
    <div className='bg-voilet-300' >
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>





    </div>
  );
}

export default App;