/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import apiClient, { AxiosError, CanceledError } from '../services/apiClient';
import { AxiosRequestConfig } from 'axios';

interface APIResponse<T> {
  info: ResponseInfo;
  results: T[];
}

interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    () => {
      const constroller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<APIResponse<T>>(endpoint, {
          signal: constroller.signal,
          ...requestConfig
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          if (!(error instanceof CanceledError)) {
            setError(error.message);
            setIsLoading(false);
          }
        });

      return () => constroller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error };
}

export default useData;
