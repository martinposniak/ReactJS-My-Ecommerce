import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ShoppingCartProvider from './context/ShoppingCartContext';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Logout from './page/Logout';


const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route exact path='/catalogue' element={<ItemListContainer />} />
      <Route exact path='/category/:category' element={<ItemListContainer />} />
      <Route exact path='/category/subcategory/:subcategory'element={<ItemListContainer />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      <Route exact path='/cart' element={<Cart />} />
      <Route exact path='/contact' element={<Contact />} />

    </Routes>

    <Footer />
    </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App






     
