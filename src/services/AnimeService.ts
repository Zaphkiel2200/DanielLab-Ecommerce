import { Anime } from "../types/types";

export async function getTopAnime(): Promise<Anime[]> {
  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    throw error;
  }
}

export async function addToCart(animeId: string): Promise<boolean> {
  console.log(`Añadiendo anime con ID: ${animeId} al carrito`);
  return true;
}

export async function removeFromCart(animeId: string): Promise<boolean> {
  console.log(`Eliminando anime con ID: ${animeId} del carrito`);
  return true;
}