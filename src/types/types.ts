export interface Anime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url?: string;
      large_image_url?: string;
    };
  };
  score: number;
  episodes: number;
  synopsis: string;
  genres: {
    name: string;
  }[];
  year?: number;
  status?: string;
}

export interface State {
  cartItems: number[];
  anime: Anime[];
  currentPage: string;
}