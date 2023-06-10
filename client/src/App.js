import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import CartMenu from './components/CartMenu';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import ItemDetail from './pages/itemDetail/ItemDetail';
import Confirmation from './pages/checkout/Confirmation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
