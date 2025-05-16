import { useAppDispatch, useAppSelector } from '../store/store';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p>Add some animes to your cart!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div key={item.mal_id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <img 
                src={item.images.jpg.image_url} 
                alt={item.title} 
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            <button 
              onClick={() => dispatch(removeFromCart(item.mal_id))}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">Total: ${total}</h2>
          <button 
            onClick={() => dispatch(clearCart())}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;