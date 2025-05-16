import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Anime Store</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Animes</Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cartItems.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;