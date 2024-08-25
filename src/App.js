
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';


function App() {
  return (
    <div>
      <BrowserRouter>  
       <Navbar/>
       <Routes> 
        <Route path='/' element={<Shop/>}/>
        <Route path = '/Mens' element={<shopcategory category = "Mens"/>}/>
        <Route path = '/Womens' element={<shopcategory category = "Womens"/>}/>
        <Route path = '/Kids' element={<shopcategory category = "Kids"/>}/>
        <Route path  = "product" element={<product/>}>
          <Route path = ':productId' element={<product/>}/>
       </Route>
       <Route path = '/cart' element = {<cart/>}/>
       <Route path = '/login' element = {<LoginSignup/>}/> 
       
       
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
