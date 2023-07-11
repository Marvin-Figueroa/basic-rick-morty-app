import axios, { AxiosError, CanceledError } from 'axios';

export interface QueryParams {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  species?: string | undefined;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export { AxiosError, CanceledError };
