import React,{createContext, useState} from 'react';
import all_product from '../components/assests/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for(let index = 0; index < all_product ; index++){
    cart[index] = 0;

  }
  return cart;
}

const ShopContextProvider = (props) => {
  
  const [cartItems,setCartItems] = useState(getDefaultCart());
  
  const addToCart = (item) => {
    setCartItems(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            
            return prevCart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            
            return [...prevCart, { ...item, quantity: 1 }];
        }
    });
};

  const removeFromCart = (itemId) =>{
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }
  
  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }
  const contextValue = {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;