import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersRequest, getEpisodesRequest } from '../../api/rickAndMorty/rickAndMortyRequest';

export const getEpisodes = createAsyncThunk('rickAndMorty/episodes', async () => {
  const res = await getEpisodesRequest();
  return res.json();
});

export const getCharactersRickAndMorty = createAsyncThunk('rickAndMorty/characters', async () => {
  const res = await getCharactersRequest();
  return res.json();
});
