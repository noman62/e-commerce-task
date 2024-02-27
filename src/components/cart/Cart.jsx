// Cart.js
import  { useContext } from 'react';
import ProductNav from '../product/ProductNav';
import { MyContext } from '../CartContext/CartContext';
import CartView from './CartView';
import CheckoutView from './CheckoutView';

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.name === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.name !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className='bg-gray-50 mt-16'>
      <ProductNav />
      <div className=''>
        <div className='flex shadow-sm mx-20 my-10'>
          <h2>Your Cart</h2>
          <CartView
            cart={cart}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
          {/* Add the CheckoutView component or additional cart-related content */}
          <CheckoutView cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
