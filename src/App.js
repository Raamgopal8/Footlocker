
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import men_banner from './components/assests/banner_mens.png';
import women_banner from './components/assests/banner_women.png';
import kid_banner from './components/assests/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>  
       <Navbar/>
       <Routes> 
        
        <Route path='/' element={<Shop/>}/>
        <Route path = '/Mens' element={<ShopCategory banner={men_banner} category = "men"/>}/>
        <Route path = '/Womens' element={<ShopCategory banner={women_banner} category = "women"/>}/>
        <Route path = '/Kids' element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
        <Route path  = '/product' element={<Product/>}>
        <Route path = ':productId' element={<Product/>}/>
      </Route>
       <Route path = '/Cart' element = {<Cart/>}/>
       <Route path = '/login' element = {<LoginSignup/>}/> 
       </Routes>
       

    </BrowserRouter>

    </div>
  );
}

export default App;
