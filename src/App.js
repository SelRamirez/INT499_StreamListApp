
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './Links';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Cart from './pages/Cart';
import About from './pages/About';




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes className="contentPage">
        <Route path="/" element={<Home />} />
        <Route path="/pages/Movies" element={<Movies />} />
        <Route path="/pages/Cart" element={<Cart />} />
        <Route path="/pages/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
