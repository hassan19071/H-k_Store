import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FilterPage from './pages/FilterPage';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/shop/:type' element={<FilterPage/>} ></Route>
          <Route path='/cart' element={<Cart/>} ></Route>
          <Route path='/wishlist' element={<Wishlist/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/single-product/:id' element={<ProductDetails/>} ></Route>
          <Route path='/checkout' element={<Checkout/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
