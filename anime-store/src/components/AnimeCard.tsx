import { Anime } from '../types';

interface AnimeCardProps {
  anime: Anime;
  onAddToCart: () => void;
}

const AnimeCard = ({ anime, onAddToCart }: AnimeCardProps) => {
  const price = Math.round(anime.score * 2); // Precio ficticio basado en el score

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={anime.images.jpg.image_url} 
        alt={anime.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{anime.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{anime.synopsis}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">${price}</span>
          <button 
            onClick={onAddToCart}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;