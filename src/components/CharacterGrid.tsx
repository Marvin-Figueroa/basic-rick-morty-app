import { useEffect, useState } from 'react';
import { APIResponse, Character } from '../types';
import apiClient, { AxiosError } from '../services/apiClient';

const CharacterGrid = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const constroller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<APIResponse>('/character', { signal: constroller.signal })
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((error: AxiosError) => setError(error.message))
      .finally(() => setIsLoading(false));

    return () => constroller.abort();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CharacterGrid;
