import { useContext } from 'react';
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
      <div className='flex flex-col md:flex-row justify-center items-start mx-4 md:mx-10 lg:mx-20'>
        <CartView
          cart={cart}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
        />
        <CheckoutView cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
