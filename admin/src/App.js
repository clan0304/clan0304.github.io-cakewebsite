import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Products from './pages/Products';
import UpdateProducts from './pages/UpdateProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<UpdateProducts />} />
          <Route path="/createproduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
