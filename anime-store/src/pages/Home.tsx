import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchAnimes } from '../features/anime/animeSlice';
import { addToCart } from '../features/cart/cartSlice';
import AnimeCard from '../components/AnimeCard';

const Home = () => {
  const dispatch = useAppDispatch();
  const { animes, status, error } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const handleAddToCart = (anime: any) => {
    // Agregamos un precio ficticio basado en el score
    const animeWithPrice = {
      ...anime,
      price: Math.round(anime.score * 2),
    };
    dispatch(addToCart(animeWithPrice));
  };

  if (status === 'loading') {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="text-2xl font-bold mb-6">Top Animes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animes.map((anime) => (
          <AnimeCard 
            key={anime.mal_id} 
            anime={anime} 
            onAddToCart={() => handleAddToCart(anime)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;