import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Anime } from '../../types';

interface AnimeState {
  animes: Anime[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  lastUpdated: number | null;
}

const initialState: AnimeState = {
  animes: [],
  status: 'idle',
  error: null,
  lastUpdated: null,
};

export const fetchAnimes = createAsyncThunk(
  'anime/fetchAnimes',
  async (_, { getState }) => {
    // Cache First Strategy
    const state = getState() as { anime: AnimeState };
    const cachedAnimes = state.anime.animes;
    const lastUpdated = state.anime.lastUpdated;
    
    // Si tenemos datos en caché y no han pasado más de 5 minutos, usamos el caché
    if (cachedAnimes.length > 0 && lastUpdated && Date.now() - lastUpdated < 300000) {
      return cachedAnimes;
    }
    
    // Si no, hacemos la petición a la API
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    return response.data.data;
  }
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnimes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.animes = action.payload;
        state.lastUpdated = Date.now();
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch animes';
      });
  },
});

export default animeSlice.reducer;