import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Products from './Pages/Products';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;
