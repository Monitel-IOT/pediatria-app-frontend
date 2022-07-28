const URL_BASE = 'https://rickandmortyapi.com/api';

export const getEpisodesRequest = () => fetch(`${URL_BASE}/episode`);
export const getCharactersRequest = () => fetch(`${URL_BASE}/character`);
