import { useEffect, useState } from 'react';
import { APIResponse, Character } from '../types';
import apiClient, { AxiosError } from '../services/apiClient';
import { CanceledError } from 'axios';

function useCharacters() {
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
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        if (!(error instanceof CanceledError)) {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => constroller.abort();
  }, []);

  return { characters, isLoading, error };
}

export default useCharacters;
